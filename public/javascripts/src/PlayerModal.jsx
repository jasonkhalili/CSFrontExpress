var React = require('react/addons');
var Modal = require('react-semantify').Modal;

module.exports = React.createClass({
  // componentDidMount: function() {
  //   $('.ui.modal').modal('show');
  // },
  render: function() {
    var className="basic " + this.props.player.id + " " + this.props.player.total_item_value;
    return (
      <Modal className={className} init={false}>
        <p>{this.props.player.personaname}</p>
        <p>{this.props.player.total_item_value}</p>
      </Modal>
    );
  }
});
