var React = require('../../libraries/react/react-with-addons.js');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

module.exports =  React.createClass({
    loadInventoryFromServer: function() {
        $.ajax({
            url: inventoryURL,
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
    },
    render: function() {
        return (
            <div className="inventoryBox">
                <p>{this.state.data}</p>
            </div>
        );
    }
});
