angular
  .module('ngApp', [])
  .directive('myClock', myClock)
  .directive('myGoogleMap', myGoogleMap)
  .controller('addressController', addressController)
  .factory('addressFactory', addressFactory)
  .constant('GLOBALS', {
     addressUrl: 'http://api.postcodedata.nl/v1/postcode/'});

function myClock() {
  var directive = {
    template: '<h2>{{ vm.time | date: "HH:mm:ss" }}</h2>',
    controller: clockController,
    controllerAs: 'vm'
  }
  return directive;
}

function clockController($interval){
  'nginject'
  var vm = this;
  var update=$interval(function () {
    vm.time = new Date();
  }, 1000);
}

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

function googleMapController() {
  var vm = this;
  console.log('latitude:',vm.latitude);
  console.log('longitude:',vm.longitude);
  console.log('zoom:',vm.zoom);
  if (!!vm.latitude)
    initMap2(vm.latitude, vm.longitude, vm.zoom);
}

function initMap() {
  console.log('initMap called');
  initMap2(51.09, 5.11, 7);// centraal station utrecht
}

// adding <div id="map"></div> to the index.html shows the map with the specified coordinates
var map;
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
    console.log('map is defined:', map);
}