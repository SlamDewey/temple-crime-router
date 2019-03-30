const roads = require('../data/geojson/roads.json');
roads = roads.json();

function node(id, lat, lon) {
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.edges = [];
    function add_adjacent_node(n, weight) {
        this.edges.push({n, weight});
    }
}

console.log(roads);