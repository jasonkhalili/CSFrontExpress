var React = require('react/addons');

var chartOptions = {
  responsive: true,
  scaleIntegersOnly: false
};

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
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
});
