// Libraries
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');

// React Components
var HelloWorld = require('./HelloWorld.jsx');
var RoundBox = require('./RoundBox.jsx');

// Additional Scripting
var Canvas = require('./canvas.jsx');

React.render(
    <RoundBox url="http://localhost:3000/api/rounds" pollInterval={2000} />,
    document.getElementById('main')
);