var React = require('react/addons');

var Rounds = require('./Rounds.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  render: function () {
    return (
      <div className="roundBox">
        <Rounds pollInterval={2000} url='http://localhost:3000/api/rounds' />
      </div>

    );
  }
});
