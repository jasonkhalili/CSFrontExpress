var React = require('../../libraries/react/react-with-addons.js');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');

var SteamTradeOffers = require('steam-tradeoffers');

var offers = new SteamTradeOffers();

module.exports =  React.createClass({
    render: function() {
        console.log(offers);
        return (
            <div className="inventoryBox">
                <p>test</p>
            </div>
        );
    }
})
