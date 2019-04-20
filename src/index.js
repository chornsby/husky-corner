const m = require("mithril").default;

const bulma = require("bulma/css/bulma.css");

const Convert = require("./views/Convert.js");
const Home = require("./views/Home.js");

m.route(document.body, "/", { "/": Home, "/convert": Convert });
