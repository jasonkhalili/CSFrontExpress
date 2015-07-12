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
    var cardStyle = {borderBottom: "4px solid #" + item.name_color};
    return (
      <a className="ui card" data-content={item.name}>
        <div className="ui image" style={cardStyle}>
          <img src={itemURL}/>
        </div>
        <div className="content">
          <div className="center aligned">
            {item.name}<br/>
            ${itemPrice}
          </div>
        </div>
      </a>
    );
  }
});
