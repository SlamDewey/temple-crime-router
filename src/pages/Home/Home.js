import React, {Component, button} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Home.css'
import Directions from '../../components/Directions/DirectionsContainer'



class Home extends Component {

    createReduxDataStore
    _add_error = () => {
        this.props.addError("test");
    }

    render() {
        //this.fetch_street_map();
        return(
            <div>
                <Directions />
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
                        Popup for any custom information.
                      </Popup>
                    </Marker>
                  </LeafletMap>
            </div>
        );
    }
}

export default Home;