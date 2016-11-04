"use strict";

const React = require("react"),
    {Component} = React;
const ReactLeaflet = require("@yavuzmester/react-leaflet"),
    {Map, TileLayer} = ReactLeaflet;
const ZoomDisplay = require("react-leaflet-zoom-display");

class GeoMap extends Component {
    render() {
        const {center, zoom} = this.props;

        return (
            <Map center={center} zoom={zoom}>
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
                <ZoomDisplay/>
            </Map>
        );
    }
}

module.exports = GeoMap;
