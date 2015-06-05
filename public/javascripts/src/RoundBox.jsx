var React = require('../../libraries/react/react-with-addons.js');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Rounds = require('./Rounds.jsx');

module.exports =  React.createClass({
    render: function() {
        return (
            <div className="roundBox">
                <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
                    <Rounds url="http://localhost:3000/api/rounds" pollInterval={2000} />
                </ReactCSSTransitionGroup>
            </div>

        );
    }
});