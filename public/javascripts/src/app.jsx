// Libraries
$ = jQuery = require('jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var bootstrapMaterialDesign = require('../../libraries/bootstrap-material-design/dist/js/material');
var ripples = require('../../libraries/bootstrap-material-design/dist/js/ripples');

var React = require('react/addons');

// React Components
var HelloWorld = require('./HelloWorld.jsx');
var RoundBox = require('./RoundBox.jsx');
var UserBox = require('./UserBox.jsx');
var InventoryBox = require('./InventoryBox.jsx');

// Additional Scripting
// var Canvas = require('./canvas.jsx');

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
    <InventoryBox steam_id={user_id} />,
    document.getElementById('inventory')
  );
}
