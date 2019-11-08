import * as React from "react";
import { render } from "react-dom";
import Root from "./Root";

// HTML の <div id="react_container"></div> に要素を挿入します
render(<Root />, document.getElementById("react_container"));
