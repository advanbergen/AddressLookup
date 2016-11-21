﻿//http://api.postcodedata.nl/v1/postcode/?postcode=4851AH&streetnumber=16&ref=domeinnaam.nl&type=json
 
//expected response:
//  {
//    "status": "ok",
//    "details": [{
//      "street": "Rooiakker",
//      "city": "Ulvenhout",
//      "municipality": "Breda",
//      "province": "Noord-Brabant",
//      "postcode": "4851 AH",
//      "pnum": "4851",
//      "pchar": "AH",
//      "rd_x": "114263.25740000000000000000",
//      "rd_y": "395974.31535000000000000000",
//      "lat": "51.5512518032450",
//      "lon": "4.7998622348226"
//    }]
//  }
 

addressFactory.$inject = ['$http', 'GLOBALS'];

function addressFactory($http, GLOBALS) {
  var factory = {};
  factory.getAddress = function () {
    return $http({
      method: 'GET',
      url: GLOBALS.addressUrl
    });
  };
  return factory;
}