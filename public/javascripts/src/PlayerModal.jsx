var React = require('react/addons');
var Modal = require('react-semantify').Modal;

module.exports = React.createClass({
  // componentDidMount: function() {
  //   $('.ui.modal').modal('show');
  // },
  render: function() {
    var className = this.props.index.toString();
    return (
      <Modal className={className} init={false}>
        <div className="header">
          {this.props.player.personaname}
        </div>
        <div className="content">
          <div className="ui image medium">
            <img src={this.props.player.avatarfull}/>
          </div>
          <div className="description">
            <div className="ui header">
              Deposit Info:
            </div>
            <div className="ui items">
              {this.props.player.items.map(function(item) {
                var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
                var nameStyle = {color: "#" + item.name_color};
                return (
                  <div className="item">
                    <div className="image">
                      <img className="bordered" src={itemURL}/>
                    </div>
                    <div className="content">
                      <div className="header" style={nameStyle}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p>{this.props.player.total_item_value}</p>
        </div>
      </Modal>
    );
  }
});
