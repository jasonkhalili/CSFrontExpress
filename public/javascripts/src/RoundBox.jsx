var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Rounds = require('./Rounds.jsx');

module.exports =  React.createClass({
    render: function() {
        return (
            <div className="roundBox">
                <Rounds url="http://localhost:3000/api/rounds" pollInterval={2000} />
            </div>
        );
    }
});