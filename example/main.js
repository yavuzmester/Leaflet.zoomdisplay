"use strict";

const ReactDOM = require("react-dom");
const React = require("react");
const {GeoMap} = require("components");

ReactDOM.render(React.createElement(GeoMap, {center: [51.505, -0.09], zoom: 13}), document.getElementById("container"));
