function googleMap() {
    var map;
    function link(lat, lon) {
        map = new google.maps.Map(document.getElementById('map'),
        {
            center: { lat: lat, lng: lon }, // lat: 51.09, lng: 5.11 = centraal station utrecht
            zoom: 7 //17
        });
    }
    return {
        link: link
    };
}
