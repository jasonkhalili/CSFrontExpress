var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    console.log(JSON.stringify(this.props.items));
    return (
      <ul className="roundItems">
        {this.props.items.map(function(item) {
          var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
          return (
            <li>
              <img src={itemURL}></img><p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
});
