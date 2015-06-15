// Libraries
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('../../libraries/react/react-with-addons.js');

// React Components
var HelloWorld = require('./HelloWorld.jsx');
var RoundBox = require('./RoundBox.jsx');
var UserBox = require('./UserBox.jsx');
var InventoryBox = require('./InventoryBox.jsx');

// Additional Scripting
var Canvas = require('./canvas.jsx');

React.render(
    <RoundBox />,
    document.getElementById('main')
);

React.render(
    <UserBox />,
    document.getElementById('user')
);