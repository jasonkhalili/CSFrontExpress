var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var User = require('./User.jsx');


module.exports = React.createClass({
    render: function () {
        var userURL = 'http://localhost:3000/api/users/' + String(user_data);
        console.log(userURL);
        return (
            <div className="userBox">
                <User url={userURL} pollInterval={2000} />
                <p>test</p>
            </div>
        );
    }
});
