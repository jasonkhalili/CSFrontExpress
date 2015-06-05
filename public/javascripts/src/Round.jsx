var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Rounds = require('./Rounds.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.data.map(function(round) {
                    return (
                        <li key={round.id}>
                            {round.game_id}
                        </li>
                    );
                })}
            </div>
        );
    }
});
