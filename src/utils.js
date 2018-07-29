import XLSX from "xlsx";

/**
 * Convert a string into an array of columns for a single row in the output.
 */
const convertRowToCells = (row, index, episode) => {
  // Split using the delimiter as specified in the program
  row = row.split("<");

  // Do not modify the header row
  if (index > 0) {
    // Grow the row to a minimum size
    while (row.length < 4) {
      row.push("");
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
const convertStringToRows = (inputContent, episode) => {
  return inputContent
    .split("\n")
    .map(row => row.trim())
    .filter(row => row)
    .map((row, index) => convertRowToCells(row, index, episode));
};

/**
 * Return an XLSX Workbook from the input file and options.
 */
const convertToWorkbook = (inputContent, episode) => {
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
const downloadWorkbook = (workbook, filename) => {
  return XLSX.writeFile(workbook, filename);
};

/**
 * Wrap FileReader so it's easy to use with async-await syntax.
 *
 * https://blog.shovonhasan.com/using-promises-with-filereader/
 */
const readFileAsText = inputFile => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsText(inputFile);
  });
};

export {
  convertRowToCells,
  convertStringToRows,
  convertToWorkbook,
  downloadWorkbook,
  readFileAsText
};
