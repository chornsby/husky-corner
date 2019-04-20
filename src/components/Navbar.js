const m = require("mithril").default;
const Icon = require("./icon.png");

module.exports = {
  view: () =>
    m("nav.navbar[aria-label='main navigation']", [
      m(".navbar-brand", [
        m("a.navbar-item[href='/']", { oncreate: m.route.link }, [
          m("img[alt='Husky Corner']", { src: Icon })
        ]),
        m(
          "a.navbar-item[href='/']",
          { oncreate: m.route.link },
          "Husky Corner"
        ),
        m(
          "a.navbar-item[href='/convert']",
          { oncreate: m.route.link },
          "Convert to Excel"
        )
      ])
    ])
};
