import XLSX from "xlsx";

/**
 * Convert a string into an array of columns for a single row in the output.
 */
const convertRowToCells = (rowText: string, index: number, episode: string) => {
  // Split using the delimiter as specified in the program
  const row = rowText.split("<");

  // Do not modify the header row
  if (index > 0) {
    // Grow the row to a minimum size
    while (row.length < 4) {
      row.push("");
    }

    // Validate that the timestamp is not missing
    if (row[1].length === 0) {
      // But it _can_ be missing for the synopsis!
      if (row[0].toLowerCase() === "syno") {
        console.log("Ignoring missing timestamp for synopsis");
      } else {
        throw new Error(`Check missing timestamp: ${rowText}`);
      }
    }

    // Fix timestamps
    row[1] = row[1].replace(".", ":");

    // Add in the episode number
    row.splice(3, 1, episode);
  }

  return row;
};

/**
 * Convert a string into an array of rows and columns to write into a workbook.
 */
const convertStringToRows = (inputContent: string, episode: string) => {
  if (!inputContent.length) {
    throw new Error("Choose a text file");
  }
  return inputContent
    .split("\n")
    .map((row) => row.trim())
    .filter((row) => row)
    .map((row, index) => convertRowToCells(row, index, episode));
};

/**
 * Return an XLSX Workbook from the input file and options.
 */
const convertToWorkbook = (
  inputContent: string,
  episode: string
): XLSX.WorkBook => {
  const workbook = XLSX.utils.book_new();
  const rows = convertStringToRows(inputContent, episode);
  const worksheet = XLSX.utils.aoa_to_sheet(rows);

  XLSX.utils.book_append_sheet(workbook, worksheet);

  return workbook;
};

/**
 * Use the XLSX library to download the given workbook.
 *
 * http://sheetjs.com/demos/table.html
 */
const downloadWorkbook = (workbook: XLSX.WorkBook, filename: string) => {
  return XLSX.writeFile(workbook, filename);
};

/**
 * Wrap FileReader so it's easy to use with async-await syntax.
 *
 * https://blog.shovonhasan.com/using-promises-with-filereader/
 */
const readFileAsText = (inputFile: Blob): Promise<string> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.readAsText(inputFile);
  });
};

export {
  convertRowToCells,
  convertStringToRows,
  convertToWorkbook,
  downloadWorkbook,
  readFileAsText,
};
