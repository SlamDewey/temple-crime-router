import {MapLayer} from 'react-leaflet';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Popup } from 'react-leaflet';
//import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


export default class Routing extends Component {
  initializeRouting() {
    if (this.props.map && !this.routing) {
      const plan = new L.Routing.Plan([
        L.latLng(39.989371, -75.155481),
        L.latLng(39.981521, -75.153300)
      ], {
        routeWhileDragging: false,
        geocoder          : L.Control.Geocoder.nominatim(),
      });

      this.routing = L.Routing.control({
        plan,
        // serviceUrl: MAPBOX_SERVICE_URL,
        // router    : L.Routing.mapbox(MAPBOX_TOKEN),
      });

      this.props.map.leafletElement.addControl(this.routing);
      L.DomEvent.on(this.props.map.leafletElement, 'click', this.createPopupsHandler);
    }
  }
  render() {
    return (<div/>)
  }
}


// export default class RoutingMachine extends MapLayer {
//   componentWillMount() {
//     super.componentWillMount();
//     const {map, srt, to}      = this.props;
//           this.leafletElement = L.Routing.control({
//       position : 'topleft',
//       waypoints: [
//         L.latLng(srt[0], srt[1]),
//         L.latLng(to[0], to[1]),
//       ],
//     }).addTo(map);
//   }

  // render() {
  //   return null;
  // }
// }