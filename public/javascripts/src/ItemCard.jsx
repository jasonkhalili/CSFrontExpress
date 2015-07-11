var React = require('react/addons');

module.exports = React.createClass({
  componentDidMount: function() {
    $('.card')
      .popup();
  },
  render: function() {
    var item=this.props.item;
    var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
    var itemPrice = item.median_price;
    return (
      <a className="ui red card" data-content={item.name}>
        <div className="ui image">
          <img src={itemURL}></img><p>{itemPrice}</p>
        </div>
      </a>
    );
  }
});
