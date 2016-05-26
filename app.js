var map;
var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.667, lng: -74.558},
		zoom: 12
	});
};

var markerdb = [
	{lat: 40.667, lng: -74.558},
	{lat: 40.7, lng: -74.6},
	{lat: 40.8, lng: -74.7}
];

$("#add").click(function(){

	clearMarkers();

	for (var i = 0; i < markerdb.length; i++) {
		var marker = new google.maps.Marker({
		    position: markerdb[i],
		    map: map,
		    animation: google.maps.Animation.DROP,
		    title: 'Hello World!'
		});
		markers.push(marker);
	}; 

	// var myLatLng = {lat: 40.667, lng: -74.558};
	// var marker = new google.maps.Marker({
	//     position: myLatLng,
	//     map: map,
	//     title: 'Hello World!'
	// });
});
