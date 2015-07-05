var React = require('react/addons');
require('react-chartjs');
var DoughnutChart = require('react-chartjs').Pie;

module.exports = React.createClass({
  render: function() {
    if(this.props.show) {
      return (
        <div className="itemsChart">
          <p>ItemsChart</p>
          <DoughnutChart data={this.props.itemChartData}/>
        </div>
      );
    }
    else {
      return (
        <p>No data</p>
      );
    }
  }
});
