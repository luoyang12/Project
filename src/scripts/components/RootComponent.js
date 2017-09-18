
// var React = require('react')

var HeaderComponent = require("./HeaderComponent")
var ContentComponent = require("./ContentComponent")
var FooterComponent = require("./FooterComponent")

var RootComponent = React.createClass({
    render:function () {
        return (
            <div>
                <HeaderComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </div>
        )
    }
})


module.exports = RootComponent