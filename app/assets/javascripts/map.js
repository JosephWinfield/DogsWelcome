var placeLocation;
var coordinates;
var google;

$(function() {
  function initialize() {
    var mapOptions = {
      center: { lat: coordinates[0], lng: coordinates[1]  },
      zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    placeLocation.forEach(function(place) {
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(place.latitude, place.longitude),
          map: map
      });
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
