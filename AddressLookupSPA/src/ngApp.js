
angular
  .module('ngApp', [])
  .controller('addressController', addressController)
  .factory('addressFactory', addressFactory)
  .constant('GLOBALS', {
    addressUrl: 'http://api.postcodedata.nl/v1/postcode/?postcode=4851AH&streetnumber=16&ref=domeinnaam.nl&type=json'
});
