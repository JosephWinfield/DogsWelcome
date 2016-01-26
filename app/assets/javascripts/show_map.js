var placeCoordinates;
var google;

$(function() {
  function initialize() {
    if (!placeCoordinates) {
      return;
    }
    var mapOptions = {
      center: {
        lat: placeCoordinates[0],
        lng: placeCoordinates[1]
      },
      zoom: 15,
      scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('place-map-canvas'),
        mapOptions);

    new google.maps.Marker({
      position: new google.maps.LatLng(
        placeCoordinates[0],
        placeCoordinates[1]
      ),
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
