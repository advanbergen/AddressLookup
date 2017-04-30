(function(){
  angular
    .module('ngApp', [])
    .directive('myClock', myClock)
    .directive('myGoogleMap', myGoogleMap)
    .controller('addressController', addressController)
    .factory('addressFactory', addressFactory)
    .constant('GLOBALS', {
      addressUrl: 'http://api.postcodedata.nl/v1/postcode/'});

  function myGoogleMap() {
    var directive = {
      template: '<div>Showing on Google Map, latitude:{{vm.latitude}}, longitude:{{vm.longitude}}, zoom:{{vm.zoom}}</div>',
      controller: googleMapController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        latitude: '@',
        longitude: '@',
        zoom: '@'
      }
    }
    return directive;
  }

  var map;
  function googleMapController() {
    var vm = this;
    console.log('latitude:',vm.latitude);
    console.log('longitude:',vm.longitude);
    console.log('zoom:',vm.zoom);
    if (!!vm.latitude) {
      console.log('calling initMap2 with new location');
      initMap2(vm.latitude, vm.longitude, vm.zoom);
    }
  }
})();

var map;
function initMap() {
    console.log('initMap called');
    map = initMap2(51.09, 5.11, 7);// centraal station utrecht
    console.log('default map is defined:', map);
}

// adding <div id="map"></div> to the index.html shows the map with the specified coordinates
function initMap2(latitude, longitude, zoom) {
    console.log('initMap2 called');
    console.log('initMap2 latitude:',latitude);
    console.log('initMap2 longitude:',longitude);
    console.log('initMap2 zoom:',zoom);

    map = new google.maps.Map(document.getElementById('map'), {
        // center: { lat: 	51.5512518032450, lng: 4.7998622348226 }, // Rooiakker 16, Ulvenhout 
        center: { lat: latitude, lng: longitude}, 
        zoom: zoom //17
    });
    return map;
}