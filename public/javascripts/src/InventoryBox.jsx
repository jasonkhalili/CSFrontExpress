var React = require('../../libraries/react/react-with-addons.js');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

module.exports =  React.createClass({
  loadInventoryFromServer: function() {
    console.log(this.props.steam_id);
    console.log("In GET");
    $.ajax({
      url: 'http://localhost:3000/api/inventory/' + this.props.steam_id,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadInventoryFromServer();
    console.log("InventoryBox did mount");
  },
  render: function() {
    return (
      <div className="inventoryBox">
        <p>{this.state.data}</p>
        <p>Inventory Box Test</p>
      </div>
    );
  }
});
