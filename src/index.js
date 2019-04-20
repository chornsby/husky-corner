const m = require("mithril").default;

const bulma = require("bulma/css/bulma.css");

const Convert = require("./views/Convert.js");
const Home = require("./views/Home.js");
const Layout = require("./components/Layout.js");

m.route(document.body, "/", {
  "/": { render: () => m(Layout, m(Home)) },
  "/convert": { render: () => m(Layout, m(Convert)) }
});
