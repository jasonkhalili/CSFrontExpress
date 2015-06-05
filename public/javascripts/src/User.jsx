var React = require('../../libraries/react/react-with-addons.js')
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
        this.loadUserFromServer();
        setInterval(this.loadUserFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="User">
                <p>{this.state.data}</p>
            </div>
        );
    }
});