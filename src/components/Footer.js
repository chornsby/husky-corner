const m = require("mithril").default;

module.exports = {
  view: () =>
    m("footer.footer", [
      m(".container", [
        m(".content.has-text-centered", [
          m("strong", "Husky Corner"),
          m("span", " by "),
          m(
            "a[href='https://gitlab.com/chornsby'][target='_blank']",
            "chornsby"
          )
        ])
      ])
    ])
};
