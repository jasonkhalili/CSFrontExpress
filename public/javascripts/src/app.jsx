// Libraries
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('../../libraries/react/react-with-addons.js');

var request = require('request');

// React Components
var HelloWorld = require('./HelloWorld.jsx');
var RoundBox = require('./RoundBox.jsx');
var UserBox = require('./UserBox.jsx');
var InventoryBox = require('./InventoryBox.jsx');

// Additional Scripting
// var Canvas = require('./canvas.jsx');

//Globals
var apiPath = 'http://localhost:3000/api';

React.render(
  <RoundBox />,
  document.getElementById('main')
);


if(typeof user_id !== 'undefined') {
  React.render(
    <UserBox />,
    document.getElementById('user')
  );
  React.render(
    <InventoryBox steam_id={String(user_id)} />,
    document.getElementById('inventory')
  );
}
