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
    //template: '<div id="vm.map"></div>'
    template: '<div>Hello Google Map</div>'
  }
  return directive;
}

// adding <div id="map"></div> to the index.html shows the map with the specified coordinates
var map;
function initMap() {
  console.log('initMap is called', map);
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.09, lng: 5.11 }, // centraal station utrecht
        //center: { lat: 	51.5512518032450, lng: 4.7998622348226 }, // rooiakker 16 ulvenhout

        zoom: 7 //17
    });
}