var React = require('react/addons');

var User = require('./User.jsx');

module.exports = React.createClass({
  render: function () {
    var userURL = 'http://localhost:3000/api/users/' + String(user_id);
    return (
      <div className="userBox">
        <User pollInterval={2000} url={userURL}/>
      </div>
    );
  }
});
