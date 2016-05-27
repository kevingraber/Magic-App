var map;
var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.667, lng: -74.558},
		zoom: 12
	});
};

function autoCenter() {
	//  Create a new viewpoint bound
	var bounds = new google.maps.LatLngBounds();
	//  Go through each...
	$.each(markers, function (index, marker) {
		bounds.extend(marker.position);
	});
	//  Fit these bounds to the map
	map.fitBounds(bounds);
}

var markerdb = [
	{lat: 40.667, lng: -74.558},
	{lat: 40.7, lng: -74.6},
	{lat: 40.75, lng: -74.65}
];

var markerinfo = ['Playgroup 1', 'Playgroup 2', 'Playgroup 3']

$("#add").click(function(){

	var originURL = document.location.origin;
	$.ajax({url: originURL + '/playgroups', method: 'GET'}).done(function(response) {

		console.log(response)


		for (var i = 0; i < response.length; i++) {

			console.log(response[i].location[1])
			console.log(response[i].location[0])

			var latlng = {lat: response[i].location[1], lng: response[i].location[0]}

			console.log(latlng)

			var marker = new google.maps.Marker({
			    position: latlng,
			    map: map,
			    animation: google.maps.Animation.DROP,
			    // icon: "die.png",
			    title: 'Hello World!',
			    info: response[i].playgroupname
			});

			var infowindow = new google.maps.InfoWindow;

			marker.addListener('click', function() {
				infowindow.setContent(this.info)
				infowindow.open(map, this);
			});

			markers.push(marker)
			
		}; 

		autoCenter();

	})

	// for (var i = 0; i < markerdb.length; i++) {
	// 	var marker = new google.maps.Marker({
	// 	    position: markerdb[i],
	// 	    map: map,
	// 	    animation: google.maps.Animation.DROP,
	// 	    // icon: "die.png",
	// 	    title: 'Hello World!',
	// 	    info: markerinfo[i]
	// 	});

	// 	var infowindow = new google.maps.InfoWindow;

	// 	marker.addListener('click', function() {
	// 		infowindow.setContent(this.info)
	// 		infowindow.open(map, this);
	// 	});

	// 	markers.push(marker)
		
	// }; 

	// autoCenter();

	// var myLatLng = {lat: 40.667, lng: -74.558};
	// var marker = new google.maps.Marker({
	//     position: myLatLng,
	//     map: map,
	//     title: 'Hello World!'
	// });
});

$(document).ready(function() {
    $('select').material_select();
});
