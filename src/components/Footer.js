import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <strong>Husky Corner</strong> by{" "}
            <a
              href="https://gitlab.com/chornsby"
              rel="noopener noreferrer"
              target="_blank"
            >
              chornsby
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
