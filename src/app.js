
require("./styles/app.css")
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

var RootComponent = require("./scripts/components/RootComponent")

ReactDOM.render(<RootComponent/>,document.getElementById("app"))