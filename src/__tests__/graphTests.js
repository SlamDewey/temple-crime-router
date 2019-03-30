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

