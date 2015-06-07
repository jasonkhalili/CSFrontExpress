var React = require('../../libraries/react/react-with-addons.js')
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var userPost = [
{steam_id: {user_id},
join_date: null,
game_history: {
    test: "test1"
}}];

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
        console.log(this.state.data);
        console.log(userPost);
        $.ajax({
            url: 'http://localhost:3000/api/users',
            dataType: 'json',
            type: 'POST',
            data: userPost,
        });
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