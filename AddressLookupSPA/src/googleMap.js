
var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        //center: { lat: 51.09, lng: 5.11 }, // centraal station utrecht
        center: { lat: 	51.5512518032450, lng: 4.7998622348226 }, // rooiakker 16 ulvenhout

        zoom: 17 //17
    });
}

