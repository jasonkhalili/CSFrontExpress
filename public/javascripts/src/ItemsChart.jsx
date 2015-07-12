var React = require('react/addons');
var PlayersBox = require('./PlayersBox.jsx');

var chartOptions = {
  responsive: true,
  scaleIntegersOnly: false,
  tooltipTemplate: "<%if (label){%><%=label%> $<%}%><%= value %>",
};

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
  renderChart: function(data) {
    this.data = [];
    var ctx = document.getElementById("myChart").getContext("2d");
    this.myDoughnutChart = new Chart(ctx).Doughnut(data,chartOptions);
  },
  updateChart: function(data) {
    this.myDoughnutChart.addData(data);
  },
  componentDidMount: function() {
    this.renderChart([]);
  },
  handleClick: function(click) {
    var activePoints = this.myDoughnutChart.getSegmentsAtEvent(click);
    var playerIndex = chartColors.indexOf(activePoints[0].fillColor)-1;
    var modalToShow = '.ui.modal.' + playerIndex;
    $(modalToShow)
      .modal({
        transition: 'horizontal flip'
      })
      .modal('show');
  },
  componentDidUpdate: function(prevProps) {
    var diff = this.props.itemChartData.length - prevProps.itemChartData.length;
    if(diff) {
      for(i=1; i<=diff; i++) {
        this.updateChart(this.props.itemChartData[diff-i]);
      }
    }
  },
  render: function() {
    return (
      <div className="itemsChart">
        <p>ItemsChart</p>
        <canvas id="myChart" width="400" height="400" onClick={this.handleClick}></canvas>
        <PlayersBox players={this.props.players}/>
      </div>
    );
  }
});
