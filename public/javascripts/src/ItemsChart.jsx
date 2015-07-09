var React = require('react/addons');
require('react-chartjs');
var DoughnutChart = require('react-chartjs').Pie;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="itemsChart">
        <p>ItemsChart</p>
        <DoughnutChart data={this.props.itemChartData}/>
      </div>
    );
  }
});
