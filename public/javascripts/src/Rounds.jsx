var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Round = require('./Round.jsx');

module.exports = React.createClass({
    loadRoundsFromServer: function() {
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
        setInterval(this.loadRoundsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <ul className="Rounds">
                <Round data={this.state.data} />
            </ul>
        );
    }
});