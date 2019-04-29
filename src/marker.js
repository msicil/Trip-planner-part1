const mapbox = require('mapbox-gl');

const iconURLs = {
	activity: 'url(http://i.imgur.com/WbMOfMl.png)',
	hotel: 'url(http://i.imgur.com/D9574Cu.png)',
	restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
};

const createMarker = (markerType, coords) => {
	const markerDomEl = document.createElement('div');
	markerDomEl.style.width = '32px';
	markerDomEl.style.height = '39px';

	if (markerType === 'activity') markerDomEl.style.backgroundImage = iconURLs.activity;
	else if (markerType === 'hotel') markerDomEl.style.backgroundImage = iconURLs.hotel;
	else if (markerType === 'restaurant') markerDomEl.style.backgroundImage = iconURLs.restaurant;

	const markerDom = new mapbox.Marker(markerDomEl).setLngLat(coords);

	return markerDom;
};

module.exports = createMarker;
