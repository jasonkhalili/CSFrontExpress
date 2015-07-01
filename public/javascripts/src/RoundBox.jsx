var React = require('react/addons');

var PlayersBox = require('./PlayersBox.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  loadCurrentRoundFromServer: function () {
    $.ajax({
      url: 'http://localhost:3000/api/currentround',
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function (data) {
        console.log(JSON.stringify(data[0].game_id));
        this.setState({
          players: data[0].players,
          roundId: data[0].game_id
        });
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {
      players: [],
      roundId: null
    };
  },
  componentDidMount: function () {
    this.loadCurrentRoundFromServer();
    setInterval(this.loadCurrentRoundFromServer, 2000);
  },
  render: function () {
    return (
      <div>
        <h1>Round # {this.state.roundId}</h1>
        <PlayersBox players={this.state.players}/>
      </div>
    );
  }
});
