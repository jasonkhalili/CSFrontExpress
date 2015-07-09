var React = require('react/addons');
var PieChart = require('react-d3/piechart').PieChart;

module.exports = React.createClass({
  render: function () {
    console.log(this.props.data);
    return (
      <div className="itemsChart">
        <p>ItemsChart</p>
        <PieChart data={this.props.data}/>
      </div>
    );
  }
});
