var React = require('../../libraries/react/react-with-addons.js')
var $ = jQuery = require('../../libraries/jquery/dist/jquery');


var today = new Date();
var userPost = 
{"steam_id": user_id,
"join_date": today.toDateString(),
"game_history": {
    "test": "test1"
}};

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
    handleAddUser: function() {
        console.log(this.state.data);
        if(this.state.data = []){
            $.ajax({
                url: 'http://localhost:3000/api/users',
                dataType: 'json',
                type: 'POST',
                data: userPost,
            });
        }
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.handleAddUser();
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