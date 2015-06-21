var React = require('../../libraries/react/react-with-addons.js')
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

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
