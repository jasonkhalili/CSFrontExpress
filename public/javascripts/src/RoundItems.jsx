var React = require('react/addons');
$ = jQuery = require('jquery');
var Popup = require('react-semantify').Popup;

module.exports = React.createClass({
  componentDidMount: function() {
    $('.card')
      .popup({
        on: 'click'
      });
  },
  render: function() {
    return (
      <div className="ui cards">
        {this.props.items.map(function(item) {
          var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
          var itemPrice = item.median_price;
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
