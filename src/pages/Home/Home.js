import React, {Component, button} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Home.css'
import Directions from '../../components/Directions/DirectionsContainer'

const data = require('./roads.json');

class Home extends Component {
    _add_error = () => {
        this.props.addError("test");
    }

    /*
    {this.parseRoads(data).map((node, idx) => 
                          <Marker key={`marker-${idx}`} position={node.lat, node.lon}>
                          <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                          </Popup>
                        </Marker>
                    )}
    */


    render() {
        return(
            <div>
                <Directions />
                <div class="mapWrapper">
                    <LeafletMap
                        center={[39.98, -75.16]}
                        zoom={15}
                        maxZoom={19}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                      >
                        <TileLayer
                          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        
                        <Marker position={[39.98, -75.16]}>
                          <Popup>
                            test
                          </Popup>
                        </Marker>
                      </LeafletMap>
                    </div>
            </div>
        );
    }
}

export default Home;