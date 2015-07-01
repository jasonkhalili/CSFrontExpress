var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.players.map(function(player) {
          return (
            <div>
              <img src={player.avatar}>{player.personaname}</img>
            </div>
          );
        })}
      </div>
    );
  }
});
