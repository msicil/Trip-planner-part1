console.log('running');
const mapboxgl = require('mapbox-gl');
const createMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibWltaS1zYW4iLCJhIjoiY2p2Mml2NHQ3MjVsbzQ0bGFvbGczM216ZiJ9.K82WjLSbafCqYq5ftlPGTw';

const map = new mapboxgl.Map({
	container: 'map',
	center: [ -74.009, 40.705 ], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v11' // mapbox has lots of different map styles available.
});

const marker = createMarker('activity', [ -74.009, 40.705 ]);
marker.addTo(map);
