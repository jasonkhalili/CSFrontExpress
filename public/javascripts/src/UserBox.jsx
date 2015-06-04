var React = require('react');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var User = require('./User.jsx');


module.exports = React.createClass({
    getURL: function() {
    }
    getInitialState: function() {
        return {userURL: ""};
    },
    render: function () {
        return (
            <div className="userBox">
                <User url={this.props.userURL} />
            </div>
        );
    }
});