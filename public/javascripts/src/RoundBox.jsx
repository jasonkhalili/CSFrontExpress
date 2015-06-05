var React = require('../../libraries/react/react-with-addons.js');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Rounds = require('./Rounds.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports =  React.createClass({
    render: function() {
        return (
            <div className="roundBox">
                <Rounds url="http://localhost:3000/api/rounds" pollInterval={2000} />
            </div>

        );
    }
});