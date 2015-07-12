// Libraries
$ = jQuery = require('jquery');
require("../../libraries/semantic-ui/dist/semantic.js");
var request = require('browser-request');

var React = require('react/addons');

// React Components
var RoundBox = require('./RoundBox.jsx');

React.render(
  <RoundBox />,
  document.getElementById('main')
);
