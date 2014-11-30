Template.location.rendered = function () {
var zionvilla = new google.maps.LatLng(37.299287, -113.1018417);
var mapOpt = {
	center: zionvilla,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: true,
    scaleControl: true,
    draggable: true,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map($('#gpscoords')[0], mapOpt);
  var marker = new google.maps.Marker({
    position: zionvilla,
    map: map,
    title:"Reception Location"
  });
  var contentString = '<div id="content">'+
      '<h3 id="firstHeading" class="firstHeading">Reception Location</h3>'+
      '<div id="bodyContent">'+
      '<p>The reception is at the villa, <br>' +
      'the ceremony is a short hike from here. </p>'+
      '<p>Zion Villa, <a href="http://zionvilla.com">'+
      'http://zionvilla.com</a></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
  	content: contentString
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}