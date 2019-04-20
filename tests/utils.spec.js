const o = require("mithril/ospec/ospec");

const { convertRowToCells, convertStringToRows } = require("../src/utils.js");

o.spec("utils.mjs", () => {
  o("convertRowToCells converts header row", () => {
    o(convertRowToCells("hahmo<timecode<repla<jakso<info", 0, "")).deepEquals([
      "hahmo",
      "timecode",
      "repla",
      "jakso",
      "info"
    ]);
  });

  o("convertRowToCells converts short row", () => {
    o(convertRowToCells("KAD<01:00:35.12<Häh!", 1, "10")).deepEquals([
      "KAD",
      "01:00:35:12",
      "Häh!",
      "10"
    ]);
  });

  o("convertRowToCells converts long row", () => {
    o(convertRowToCells("KAD<01:00:35.12<Häh!<<01.23", 2, "")).deepEquals([
      "KAD",
      "01:00:35:12",
      "Häh!",
      "",
      "01.23"
    ]);
  });

  o("convertRowToCells throws error for missing timestamp", () => {
    o(() => convertRowToCells("KAD<<Häh!<<01.23", 3, "")).throws(Error);
  });

  o(
    "convertRowToCells does not throw error for missing timestamp in synopsis",
    () => {
      o(convertRowToCells("Syno<<Häh!<<01.23", 4, "")).deepEquals([
        "Syno",
        "",
        "Häh!",
        "",
        "01.23"
      ]);
    }
  );

  o("convertStringToRows removes empty lines", () => {
    o(convertStringToRows("   \n      \n")).deepEquals([]);
  });

  o("convertStringToRows converts rows to cells", () => {
    o(
      convertStringToRows(
        "hahmo<timecode<repla<jakso<info\nKAD<01:00:35.12<Häh!\n",
        "10"
      )
    ).deepEquals([
      ["hahmo", "timecode", "repla", "jakso", "info"],
      ["KAD", "01:00:35:12", "Häh!", "10"]
    ]);
  });
});
