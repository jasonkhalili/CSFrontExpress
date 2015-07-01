var React = require('react/addons');

var RoundBox = require('./RoundBox.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.players.map(function(player) {
          return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
              <img src={player[0].avatar}></img>
              <p>{player[0].personaname}</p>
            </ReactCSSTransitionGroup>
          );
        })}
      </div>
    );
  }
});
