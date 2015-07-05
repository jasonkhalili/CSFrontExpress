var React = require('react/addons');

var Popup = require('react-semantify').Popup;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ui cards">
        {this.props.items.map(function(item) {
          var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
          var itemPrice = item.median_price;
          $('.card')
            .popup({
              on: 'click'
            });
          return (
            <a className="ui {item.name_color} card" data-content={item.name}>
              <div className="ui image">
                <img src={itemURL}></img><p>{itemPrice}</p>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
});
