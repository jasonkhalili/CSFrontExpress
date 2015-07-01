var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.players.map(function(player) {
          return (
            <div>
              <img src={player[0].avatar}>{player[0].personaname}</img>
            </div>
          );
        })}
      </div>
    );
  }
});
