// Libraries
$ = jQuery = require('jquery');
require("../../libraries/semantic-ui/dist/semantic.js");
require("../../libraries/chart.js/chart.js");
var request = require('browser-request');

var React = require('react/addons');

// React Components
var RoundBox = require('./RoundBox.jsx');
var PlayersBox = require('./PlayersBox.jsx');
var UserBox = require('./UserBox.jsx');
var InventoryBox = require('./InventoryBox.jsx');

React.render(
  <RoundBox />,
  document.getElementById('main')
);
