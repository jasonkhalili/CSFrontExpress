var React = require('react/addons');
var request = require('browser-request');

var PlayersBox = require('./PlayersBox.jsx');
var RoundItems = require('./RoundItems.jsx');
var ItemsChart = require('./ItemsChart.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Button = require('react-semantify').Button;

module.exports = React.createClass({
  loadCurrentRoundFromServer: function () {
    request({url: 'http://localhost:3000/api/currentround', json:true}, function(error, response, data) {
      if(error) {
        console.log(error);
      }
      var players = data[0].players;
      var roundId = data[0].game_id;
      var itemChartData = [];
      var allItems = [];
      for(i = 0; i < players.length; i++) {
        itemChartData.push({
          value: players[i].total_item_value,
          color: "000000",
          label: players[i].personaname + " deposited " + players[i].items.length + " skins"
        });
        for(j = 0; j < players[i].items.length; j++) {
          allItems.push(players[i].items[j]);
        }
      }
      var showChart = true;
      this.setState({
        players: players,
        roundId: roundId,
        itemChartData: itemChartData,
        allItems: allItems
      });
    }.bind(this));
  },
  getInitialState: function () {
    return {
      players: [],
      roundId: null,
      itemChartData: [],
      showChart: false,
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
        <div className="ui grid">
          <h1 className="ui header">Round # {this.state.roundId}</h1>
          <div className="sixteen wide column">
            <RoundItems items={this.state.allItems}/>
          </div>
          <PlayersBox players={this.state.players}/>
          <ItemsChart itemChartData={this.state.itemChartData} show={this.state.showChart}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});
