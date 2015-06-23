var React = require('react/addons');

var Rounds = require('./Rounds.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data.map(function(round) {
          return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
              <li key={round.id}>
                {round.game_id}
              </li>
            </ReactCSSTransitionGroup>
          );
        })}
      </div>
    );
  }
});
