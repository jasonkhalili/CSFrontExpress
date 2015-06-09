var React = require('../../libraries/react/react-with-addons.js')
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var User = require('./User.jsx');


module.exports = React.createClass({
    render: function () {
        var userURL = 'http://localhost:3000/api/users/' + String(user_id);
        return (
            <div className="userBox">
                <User url={userURL} pollInterval={2000} />
            </div>
        );
    }
});
