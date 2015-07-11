var React = require('react/addons');
var ItemCard = require('./ItemCard.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(JSON.stringify(this.props.items));
    return (
      <div className="ui cards">
        {this.props.items.map(function(item) {
          return (
            <ItemCard item={item}/>
          );
        })}
      </div>
    );
  }
});
