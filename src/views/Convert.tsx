import React from "react";

import { convertToWorkbook, downloadWorkbook, readFileAsText } from "../utils";

type Props = {};

type State = {
  episode: string;
  inputContent: string;
  inputFilename: string;
  outputFilename: string;
};

class Convert extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      episode: "",
      inputContent: "",
      inputFilename: "",
      outputFilename: "output.xlsx",
    };
  }

  onDownloadClicked = () => {
    try {
      const outputWorkbook = convertToWorkbook(
        this.state.inputContent,
        this.state.episode
      );
      downloadWorkbook(outputWorkbook, this.state.outputFilename);
    } catch (e) {
      this.setState({
        ...this.state,
        inputContent: "",
        inputFilename: "",
      });
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  onFileChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;
    const inputFile = target.files[0];
    this.setState({
      ...this.state,
      inputContent: await readFileAsText(inputFile),
      inputFilename: inputFile.name,
    });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Upload a file</h1>
          <p>
            This utility converts a file of text separated with{" "}
            <code>&lt;</code> characters into separate columns in an Excel
            spreadsheet.
          </p>
          <br />
          <div className="field">
            <label className="label">Text file</label>
            <div className="file has-name is-fullwidth">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={this.onFileChanged}
                />
                <span className="file-cta">
                  <span className="file-label">Choose a file</span>
                </span>
                <span className="file-name">{this.state.inputFilename}</span>
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Excel filename</label>
            <div className="control">
              <input
                className="input"
                placeholder="Optional"
                type="text"
                onChange={(event) =>
                  this.setState({
                    ...this.state,
                    outputFilename: event.target.value,
                  })
                }
                value={this.state.outputFilename}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Episode</label>
            <div className="control">
              <input
                className="input"
                placeholder="Optional"
                type="text"
                onChange={(event) =>
                  this.setState({ ...this.state, episode: event.target.value })
                }
                value={this.state.episode}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                onClick={this.onDownloadClicked}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Convert;
