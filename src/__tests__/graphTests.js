import expect from 'expect';

var id = function(lat, lon) {
    return lat+','+lon;
  };

function node(id, lat, lon) {
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.edges = [];
    this.add_adjacent_node = function(n, weight) {
        this.edges.push({n, weight});
    }
}

function road(id, name, nodes) {
    this.id = id;
    this.name = name;
    this.nodes = nodes;
}

const roads = require('../../data/geojson/roads.json');

var roads_list = [];
var nodes_list = [];

describe('parse geojson', () => {
	it('is not undefined', () => {
        for (var i = 0; i < roads.features.length; i++) {
            //for each road
            var cur_road = roads.features[i];
            //make a road
            roads_list[i] = new road(cur_road.properties.osm_id, cur_road.properties.name, []);
            //and then
            var coords = cur_road.geometry.coordinates.length;
            for (var j = 0; j < coords; j++) { 
                //for each coord
                var cur_coords = cur_road.geometry.coordinates[j];
                var n_id = id(cur_coords[1], cur_coords[0]);
                if (nodes_list[n_id] == null) {
                    //generate a node
                    roads_list[i].nodes[j] = new node(n_id, cur_coords[1], cur_coords[0]);
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
        var str = "";
        str += "{\"nodes\": [\"";
        for (var x in nodes_list) {
            str += "{\"lon\":" + nodes_list[x].lat + ", \"lat\":" + nodes_list[x].lon + "},";
        }
        str += "]}";
        console.log(str);
		expect(roads).not.toEqual('undefined');
	})
});