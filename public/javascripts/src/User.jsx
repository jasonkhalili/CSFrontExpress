var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

module.exports =  React.createClass({
    loadUserFromServer: function() {
        $.ajax({
            url: this.props.url,
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
        this.loadRoundsFromServer();
    },
    render: function() {
        return (
            <div className="user">
                {this.state.data}
            </div>
        );
    }
});