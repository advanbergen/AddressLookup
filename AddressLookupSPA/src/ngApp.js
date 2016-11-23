
angular
  .module('ngApp', [])
  .controller('addressController', addressController)
  .factory('addressFactory', addressFactory)
  .constant('GLOBALS', {
    addressUrl: 'http://api.postcodedata.nl/v1/postcode/'
});
