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
        <div className="ui header">
          <p>{this.props.player.personaname}</p>
        </div>
        <div className="content">
          <div className="ui image medium">
            <img src={this.props.player.avatarfull}/>
          </div>
          <p>{this.props.player.total_item_value}</p>
        </div>
      </Modal>
    );
  }
});
