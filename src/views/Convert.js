const m = require("mithril").default;

const {
  convertToWorkbook,
  downloadWorkbook,
  readFileAsText
} = require("../utils");

const ConvertForm = {
  episode: "",
  inputContent: "",
  inputFilename: "",
  outputFilename: "output.xlsx",

  onfilechange: async event => {
    const inputFile = event.target.files[0];
    ConvertForm.inputFilename = inputFile.name;
    ConvertForm.inputContent = await readFileAsText(inputFile);
  },

  onclick: () => {
    try {
      const outputWorkbook = convertToWorkbook(
        ConvertForm.inputContent,
        ConvertForm.episode
      );
      downloadWorkbook(outputWorkbook, ConvertForm.outputFilename);
    } catch (e) {
      alert(e.message);
    }
  }
};

module.exports = {
  view: () =>
    m("section.section", [
      m(".container", [
        m("h1.title", "Upload a file"),
        m("p", [
          "This utility converts a file of text separated with ",
          m("code", "<"),
          " characters into separate columns in an Excel spreadsheet."
        ]),
        m("br"),
        m(".field", [
          m("label.label", "Text file"),
          m(".file.has-name.is-fullwidth", [
            m("label.file-label", [
              m("input.file-input[name='file'][type='file']", {
                onchange: ConvertForm.onfilechange
              }),
              m("span.file-cta", [m("span.file-label", "Choose a file")]),
              m("span.file-name", ConvertForm.inputFilename)
            ])
          ])
        ]),
        m(".field", [
          m("label.label", "Excel filename"),
          m("div.control", [
            m("input.input[placeholder='Optional'][type='text']", {
              onchange: event => {
                ConvertForm.outputFilename = event.target.value;
              },
              value: ConvertForm.outputFilename
            })
          ])
        ]),
        m(".field", [
          m("label.label", "Episode"),
          m(".control", [
            m("input.input[placeholder='Optional'][type='text']", {
              onchange: event => {
                ConvertForm.episode = event.target.value;
              },
              value: ConvertForm.episode
            })
          ])
        ]),
        m(".field", [
          m(".control", [
            m(
              "button.button.is-primary",
              { onclick: ConvertForm.onclick },
              "Download"
            )
          ])
        ])
      ])
    ])
};
