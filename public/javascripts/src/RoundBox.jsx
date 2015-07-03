var React = require('react/addons');
var request = require('browser-request');

var PlayersBox = require('./PlayersBox.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  loadCurrentRoundFromServer: function () {
    request({url: 'http://localhost:3000/api/currentround', json:true}, function(error, response, data) {
      if(error) {
        console.log(error);
      }
      var players = data[0].players;
      var roundId = data[0].game_id;
      var allItems = [];
      for(i = 0; i < players.length; i++) {
        allItems.push(players[i].items);
      }
      this.setState({
        players: players,
        roundId: roundId,
        allItems: allItems
      });
    }.bind(this));
  },
  getInitialState: function () {
    return {
      players: [],
      roundId: null,
      allItems: []
    };
  },
  componentDidMount: function () {
    this.loadCurrentRoundFromServer();
    setInterval(this.loadCurrentRoundFromServer, 2000);
  },
  render: function () {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <h1>Round # {this.state.roundId}</h1>
        <PlayersBox players={this.state.players}/>
        <p>{this.state.allItems}</p>
      </ReactCSSTransitionGroup>
    );
  }
});
