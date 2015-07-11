var React = require('react/addons');
var request = require('browser-request');
var RoundItems = require('./RoundItems.jsx');
var ItemsChart = require('./ItemsChart.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var chartColors = [
  "#393b79",
  "#5254a3",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
  "#8ca252",
  "#b5cf6b",
  "#cedb9c",
  "#8c6d31",
  "#bd9e39",
  "#e7ba52",
  "#e7cb94",
  "#843c39",
  "#ad494a",
  "#d6616b",
  "#e7969c",
  "#7b4173",
  "#a55194",
  "#ce6dbd",
  "#de9ed6"
];

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
        itemChartData.push({
          value: players[i].total_item_value,
          label: players[i].personaname + " deposited " + players[i].items.length + " skin worth ",
          color: chartColors[i],
          highlight: chartColors[i+1]
        });
        for(j = 0; j < players[i].items.length; j++) {
          allItems.push(players[i].items[j]);
        }
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
        <h1 className="ui header">Round # {this.state.roundId}</h1>
        <div className="ui grid">
          <div className="sixteen wide column">
            <RoundItems items={this.state.allItems}/>
          </div>
          <ItemsChart itemChartData={this.state.itemChartData} players={this.state.players}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});
