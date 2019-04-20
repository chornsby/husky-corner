const m = require("mithril").default;

const Image = require("./husky-frontpage.png");

const Navbar = require("../components/Navbar.js");
const Footer = require("../components/Footer.js");

module.exports = {
  view: () =>
    m("div", [
      m(Navbar),
      m("section.hero.is-info.is-bold", [
        m(
          ".hero-body",
          m(".container", [
            m(".columns.is-vcentered", [
              m(".column", [
                m("h1.title", "Welcome to Husky Corner"),
                m(
                  "h2.subtitle",
                  "This good boy will help you with what you need to do."
                )
              ]),
              m(".column", [m("img[style='max-height: 50%']", { src: Image })])
            ])
          ])
        )
      ]),
      m(Footer)
    ])
};
