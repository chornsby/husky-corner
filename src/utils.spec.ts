import { convertRowToCells, convertStringToRows } from "./utils";

describe("utils.mjs", () => {
  test("convertRowToCells converts header row", () => {
    expect(convertRowToCells("hahmo<timecode<repla<jakso<info", 0)).toEqual([
      "hahmo",
      "timecode",
      "repla",
      "jakso",
      "info",
    ]);
  });

  test("convertRowToCells converts short row", () => {
    expect(convertRowToCells("KAD<01:00:35.12<Häh!", 1, "10")).toEqual([
      "KAD",
      "01:00:35:12",
      "Häh!",
      "10",
    ]);
  });

  test("convertRowToCells converts long row", () => {
    expect(convertRowToCells("KAD<01:00:35.12<Häh!<<01.23", 2)).toEqual([
      "KAD",
      "01:00:35:12",
      "Häh!",
      "",
      "01.23",
    ]);
  });

  test("convertRowToCells throws error for missing timestamp", () => {
    expect(() => convertRowToCells("KAD<<Häh!<<01.23", 3)).toThrow(Error);
  });

  test("convertRowToCells does not throw error for missing timestamp in synopsis", () => {
    expect(convertRowToCells("Syno<<Häh!<<01.23", 4)).toEqual([
      "Syno",
      "",
      "Häh!",
      "",
      "01.23",
    ]);
  });

  test("convertStringToRows removes empty lines", () => {
    expect(convertStringToRows("   \n      \n")).toEqual([]);
  });

  test("convertStringToRows converts rows to cells", () => {
    expect(
      convertStringToRows(
        "hahmo<timecode<repla<jakso<info\nKAD<01:00:35.12<Häh!\n",
        "10"
      )
    ).toEqual([
      ["hahmo", "timecode", "repla", "jakso", "info"],
      ["KAD", "01:00:35:12", "Häh!", "10"],
    ]);
  });

  test("convertStringToRows converts other formats to cells", () => {
    expect(
      convertStringToRows(
        `timecode-start<timecode-end<character<line
00.00:01:15<00:00:04:00<KAD<Häh!
00:00.04:13<00:00:09.00<KAD<Häh!
`
      )
    ).toEqual([
      ["timecode-start", "timecode-end", "character", "line"],
      ["00:00:01:15", "00:00:04:00", "KAD", "Häh!"],
      ["00:00:04:13", "00:00:09:00", "KAD", "Häh!"],
    ]);
  });
});
