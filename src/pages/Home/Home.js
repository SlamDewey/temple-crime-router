import React, {Component, button} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Home.css'
import Directions from '../../components/Directions/DirectionsContainer'
import Routing from '../../components/Routing/Routing';


const data = require('./nodes.json');

class Home extends Component {
    _add_error = () => {
        this.props.addError("test");
    }

    map_markers(nodes) {
        /*return nodes.map( (node, id) => (
            <Marker key={id} position={node}>
                <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                </Popup>
            </Marker>
        ));*/
        return null
    }


    render() {
        return(
            <div>
                <Directions />
                <div className="mapWrapper">
                    <Map
                        center             = {[39.981521, -75.153300]}
                        zoom               = {15}
                        maxZoom            = {19}
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
                         {this.map_markers(data.nodes)}
                      </Map>
                    </div>
            </div>
        );
    }
}

export default Home;