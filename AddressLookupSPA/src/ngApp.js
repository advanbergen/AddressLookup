angular
    .module('ngApp', [])
    .controller('addressController', addressController)
    .factory('addressFactory', addressFactory)
    .directive('googleMap', googleMap)
    .constant('GLOBALS', {
        addressUrl: 'http://api.postcodedata.nl/v1/postcode/'
    });
