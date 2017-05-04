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
      template: '<div>Showing on Google Map, latitude:{{vm.latitude}}, longitude:{{vm.longitude}}, zoom:{{vm.zoom}}</div> \
      <div id="map2"  style="width: 1000px; height: 1000px;" ng-show="vm.latitude">this is my other map</div>',
      
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

  function googleMapController($scope) {
    var vm = this;
    $scope.$watch('vm.latitude', function(newval) { 
      console.log('watch '+newval);
      if (!!newval) {
        console.log('calling initMap2 with new location');
        var map = initMap2('map2', vm.latitude, vm.longitude, vm.zoom);
        console.log('my new map', map);
        map.zoom = 7;
      }
    });

    console.log('latitude:',vm.latitude);
    console.log('longitude:',vm.longitude);
    console.log('zoom:',vm.zoom);

  }
  googleMapController.prototype.$inject = ['$scope'];
   
  // adding <div id="map"></div> to the index.html shows the map with the specified coordinates
  function initMap2(id, latitude, longitude, zoom) {
    console.log('initMap2 called');
    console.log('initMap2 latitude:',latitude);
    console.log('initMap2 longitude:',longitude);
    console.log('initMap2 zoom:',zoom);

    var map = new google.maps.Map(document.getElementById(id), {
        // center: { lat: 	51.5512518032450, lng: 4.7998622348226 }, // Rooiakker 16, Ulvenhout 
        center: { lat: parseFloat(latitude), lng: parseFloat(longitude)}, 
        zoom: parseInt(zoom) //17
    });
    return map;
  }

})();


