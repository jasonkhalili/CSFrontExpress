var React = require('react/addons');

var Popup = require('react-semantify').Popup;

module.exports = React.createClass({
  render: function() {
    console.log(JSON.stringify(this.props.items));
    return (
      <div className="ui sixteen cards">
        {this.props.items.map(function(item) {
          var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
          var itemPrice = item.median_price.replace("&#36;", "$");
          $('.card')
            .popup({
              on: 'click'
            });
          return (
            <a className="ui red card" data-content={item.name}>
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
