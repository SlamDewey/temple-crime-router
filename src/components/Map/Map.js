import React, {Component} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'

const position = [53.349183, 83.761164];

class Map2 extends Component {
		render() {
				return(
						<LeafletMap
								center             = {[39.89, 75]}
								zoom               = {6}
								maxZoom            = {10}
								attributionControl = {true}
								zoomControl        = {true}
								doubleClickZoom    = {true}
								scrollWheelZoom    = {true}
								dragging           = {true}
								animate            = {true}
								easeLinearity      = {0.35}
							>
								<TileLayer
									url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
								/>
								<Marker position={[50, 10]}>
									<Popup>
										Popup for any custom information.
									</Popup>
								</Marker>
							</LeafletMap>
				);
		}
}

export default Map2;