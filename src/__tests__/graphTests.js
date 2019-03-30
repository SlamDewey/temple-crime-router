import expect from 'expect';

var id = function(lat, lon) {
    return lat+','+lon;
  };

function node(id, lat, lon) {
    this.id                = id;
    this.lat               = lat;
    this.lon               = lon;
    this.edges             = [];
    this.add_adjacent_node = function(n, weight) {
        this.edges.push({n, weight});
    }
}

function road(id, name, nodes) {
    this.id    = id;
    this.name  = name;
    this.nodes = nodes;
}
function vec2(x, y) {
    this.x     = x;
    this.y     = y;
    this.minus = function(v) {
        return new vec2(this.x - v.x, this.y - v.y);
    }
    this.cross = function(v) {
        return (this.x * v.y) - (this.y * v.x);
    }
}
function LineIntersect(a, b, c, d) {
    var r   = (b.minus(a));
    var s   = (d.minus(c));
    var den = r.cross(s);
    var t, u;
    t = c.minus(a).cross(r) / den;
    u = c.minus(a).cross(s) / den;
    return new vec2(t, u);
}
function generate_new_node(road1, road2, nir1, nir2) {
    //break edges from before
    //break connection between n1 -> n1 + 1
    road1.nodes[nir1].edges[road1.nodes[nir1 + 1].id] = null;
    //break connection between n1 + 1 -> n1
    road1.nodes[nir1 + 1].edges[road1.nodes[nir1].id] = null;
    //break connection between n2 -> n2 + 1
    road2.nodes[nir2].edges[road2.nodes[nir2 + 1].id] = null;
    //break connection between n1 + 1 -> n1
    road2.nodes[nir2 + 1].edges[road2.nodes[nir2].id] = null;
    
    //get new location by averaging old locations
    var totLat  = 0, totLon = 0;
        totLat += Math.abs(road1.nodes[nir1].lat) + Math.abs(road1.nodes[nir1 + 1].lat);
        totLon += Math.abs(road1.nodes[nir1].lon) + Math.abs(road1.nodes[nir1 + 1].lon);
        totLat += Math.abs(road2.nodes[nir2].lat) + Math.abs(road2.nodes[nir2 + 1].lat);
        totLon += Math.abs(road2.nodes[nir2].lon) + Math.abs(road2.nodes[nir2 + 1].lon);
    //create new intersection node
               totLat              /= 4;
               totLon              /= -4;
    var        shared_node          = new node(id(totLat, totLon), totLat, totLon);
    nodes_list[id(totLat, totLon)]  = shared_node;
    //rebuild connections
    //add connection n1 -> shared
    road1.nodes[nir1].add_adjacent_node(shared_node, 0);
    //add connection shared -> n1
    shared_node.add_adjacent_node(road1.nodes[nir1]);
    //add connection n1 + 1 -> shared
    road1.nodes[nir1 + 1].add_adjacent_node(shared_node, 0);
    //add connection shared -> n1 + 1
    shared_node.add_adjacent_node(road1.nodes[nir1 + 1]);
    //add connection n2 -> shared
    road2.nodes[nir2].add_adjacent_node(shared_node, 0);
    //add connection shared -> n2
    shared_node.add_adjacent_node(road2.nodes[nir2]);
    //add connection n2 + 1 -> shared
    road2.nodes[nir2 + 1].add_adjacent_node(shared_node, 0);
    //add connection shared -> n2 + 1
    shared_node.add_adjacent_node(road2.nodes[nir2 + 1]);
}

const roads = require('../../data/geojson/roads.json');

var roads_list = [];
var nodes_list = [];

function get_nodes() {
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
                var n_id       = id(cur_coords[1], cur_coords[0]);
                if (nodes_list[n_id] == null) {
                    //generate a node
                    roads_list[i].nodes[j] = new node(n_id, cur_coords[1], cur_coords[0]);
                    nodes_list[n_id]       = roads_list[i].nodes[j];
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
        for (var i = 0; i < roads_list.length; i++) {
            for (var j = 1; j < roads_list.length; j++) {
                if (i == j) continue;
                var loc = {i_: 0, j_: 0};
                for (var n1 in roads_list[i].nodes) {
                    for (var n2 in roads_list[j].nodes) {
                        var nodes_1 = roads_list[i].nodes;
                        var nodes_2 = roads_list[j].nodes;
                        if (nodes_1[n1 + 1] == undefined || nodes_2[n2 + 1] == undefined) continue;
                        var a, b, c, d;
                            a   = new vec2(nodes_1[n1].lat, nodes_1[n1].lon);
                            b   = new vec2(nodes_1[n1 + 1].lat, nodes_1[n1 + 1].lon);
                            c   = new vec2(nodes_2[n2].lat, nodes_2[n2].lon);
                            d   = new vec2(nodes_2[n2 + 1].lat, nodes_2[n2 + 1].lon);
                        var res = LineIntersect(a, b, c, d);
                        if (res.x < 1 && res.x > 0 && res.y < 1 && res.y > 0)
                            generate_new_node(roads_list[i], roads_list[j], n1, n2);
                    }
                }
            }
        }
        var str  = "";
            str += "{\"nodes\": [";
        for (var x in nodes_list) {
            str += "{\"lon\":" + nodes_list[x].lon + ", \"lat\":" + nodes_list[x].lat + "},";
        }
        str += "]}";
        return str;
}