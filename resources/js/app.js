// require("./components/Example");

import React from "react";
import ReactDOM from "react-dom";
// import "./scss/styles.scss";
import App from "./index";
import Example from "./components/Example";

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
