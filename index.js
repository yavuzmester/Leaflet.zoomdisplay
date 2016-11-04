"use strict";

const React = require("react");
const {MapControl} = require("@yavuzmester/react-leaflet");
const {control, DomUtil} = require("leaflet");
const ReactDOM = require("react-dom");

const defaultProps = {
    position: "topleft"
};

class ZoomDisplay extends MapControl {
    constructor(props={}) {
        super(props);
        this.onMapZoomEnd = this.onMapZoomEnd.bind(this);
    }

    componentWillMount() {
        const leafletElement = control(this.props);

        leafletElement.onAdd = function() {
            const container = DomUtil.create("div", "leaflet-control-zoom-display leaflet-bar-part leaflet-bar");
            leafletElement._container = container;
            return container;
        };

        this.leafletElement = leafletElement;
    }

    componentDidMount() {
        super.componentDidMount();

        this._updateMapZoom();

        const {map} = this.context;
        map.on("zoomend", this.onMapZoomEnd);
    }

    onMapZoomEnd(e) {
        this._updateMapZoom();
    }

    _updateMapZoom() {
        const {map} = this.context;
        this.leafletElement._container.innerHTML = "zoom:" + map.getZoom();
    }

    componentWillUnmount() {
        const {map} = this.context;
        map.off("zoomend", this.onMapZoomEnd);
    }
}

ZoomDisplay.defaultProps = defaultProps;

module.exports = ZoomDisplay;
