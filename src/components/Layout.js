const m = require("mithril").default;

const Footer = require("./Footer.js");
const Navbar = require("./Navbar.js");

module.exports = {
  view: vnode => m("div", [m(Navbar), m("div", vnode.children), m(Footer)])
};
