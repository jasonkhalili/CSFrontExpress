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
        if(!data.length){
          console.log("in if");
          this.handleAddUser();
        }
        this.setState({data: data});
      }.bind(this)
    });
  },
  handleAddUser: function() {
    console.log("in add");
    var today = new Date();
    var userPost =
    {"steam_id": user_id,
      "join_date": today.toDateString(),
      "game_history": {
        "test": "test1"
      }};
      $.ajax({
        url: 'http://localhost:3000/api/users',
        dataType: 'json',
        type: 'POST',
        data: userPost,
      });
    },
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
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
