var React = require('react/addons');
var rd3 = require('react-d3');
var PieChart = rd3.PieChart;

module.exports = React.createClass({
  render: function () {
    return (
      <div className="itemsChart">
        <p>ItemsChart</p>
        <PieChart data={this.props.data}
          width={400}
          height={400}
          radius={100}
          innerRadius={20}
          title="Pie Chart"
        />
      </div>
    );
  }
});
