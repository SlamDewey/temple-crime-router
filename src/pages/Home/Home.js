import React, {Component, button} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Home.css'
import Directions from '../../components/Directions/DirectionsContainer'

const data = require('./roads.json');

class Home extends Component {
    _add_error = () => {
        this.props.addError("test");
    }

    node(id, lat, lon) {
        this.id = id;
        this.lat = lat;
        this.lon = lon;
        this.edges = [];
        this.add_adjacent_node = function(n, weight) {
            this.edges.push({n, weight});
        }
        return this
    }

    road (id, name, nodes){
        this.id = id;
        this.name = name;
        this.nodes = nodes;
        return this
    }

    getId (lat, lon){
        return lat+','+lon;
    }

    parseRoads(roads) {
        let roads_list = [];
        var nodes_list = [];
        for (var i = 0; i < roads.features.length; i++) {
            //for each road
            var cur_road = roads.features[i];
            //make a road
            let road =  this.road(cur_road.properties.osm_id, cur_road.properties.name, []);
            roads_list[i] = road
            //and then
            var coords = cur_road.geometry.coordinates.length;
            for (var j = 0; j < coords; j++) { 
                //for each coord
                var cur_coords = cur_road.geometry.coordinates[j];
                var n_id = this.getId(cur_coords[1], cur_coords[0]);
                if (nodes_list[n_id] == null) {
                    //generate a node
                    roads_list[i].nodes[j] = this.node(n_id, cur_coords[1], cur_coords[0]);
                    nodes_list[n_id] = roads_list[i].nodes[j];
                } else {
                    //link the node
                    roads_list[i].nodes[j] = nodes_list[n_id];
                }
            }
            for (var j = 0; j < coords - 1; j++) {
                var weight = 0;
                roads_list[i].nodes[j + 1].add_adjacent_node(roads_list[i].nodes[j], weight);
                roads_list[i].nodes[j].add_adjacent_node(roads_list[i].nodes[j + 1], weight);
            }
        }
        for (var i = 0; i < nodes_list.length; i++) {
            if (nodes_list[i].edges.length > 2) console.log("intersection!");
        }
        return nodes_list
    }

    render() {
                    console.log(this.parseRoads(data))

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
                    {this.parseRoads(data).map((node, idx) => 
                          <Marker key={`marker-${idx}`} position={node.lat, node.lon}>
                          <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                          </Popup>
                        </Marker>
                    )}
                    <Marker position={[39.98, -75.16]}>
                      <Popup>
                        test
                      </Popup>
                    </Marker>
                  </LeafletMap>
            </div>
        );
    }
}

export default Home;