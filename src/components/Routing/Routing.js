import {MapLayer} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'

export default class RoutingMachine extends MapLayer {

  componentWillMount() {
    super.componentWillMount()
    const {map, dest, to} = this.props
    this.leafletElement = L.Routing.control({
      position: 'topleft',
      waypoints: [
        L.latLng(dest[0], dest[1]),
        L.latLng(to[0], to[1])
      ]
    }).addTo(map)
  }

  render() {
    return null
  }
}