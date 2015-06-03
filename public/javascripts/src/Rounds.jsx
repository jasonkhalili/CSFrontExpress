var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var Round = require('./Round.jsx');

var roundsURL = 'http://localhost:3000/api/rounds';

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
            <div className="rounds">
                <h1>Rounds Box</h1>
                <Round data={this.state.data} />
            </div>
        );
    }
});