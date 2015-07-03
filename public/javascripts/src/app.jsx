// Libraries
$ = jQuery = require('jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var bootstrapMaterialDesign = require('../../libraries/bootstrap-material-design/dist/js/material');
var ripples = require('../../libraries/bootstrap-material-design/dist/js/ripples');
var request = require('browser-request');

var React = require('react/addons');

// React Components
var RoundBox = require('./RoundBox.jsx');
var PlayersBox = require('./PlayersBox.jsx');
var UserBox = require('./UserBox.jsx');
var InventoryBox = require('./InventoryBox.jsx');

// Additional Scripting
// var Canvas = require('./canvas.jsx');

React.render(
  <RoundBox />,
  document.getElementById('main')
);
