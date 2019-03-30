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

    renderMarker(node) {
        console.log(node)
        return (
            <Marker position={node}>
                <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                </Popup>
            </Marker>
        )
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
                         {this.renderMarker(data.nodes[0])}
                      </Map>
                      <Routing/>
                    </div>
            </div>
        );
    }
}

export default Home;