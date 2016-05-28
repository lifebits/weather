class GeolocationService {

    constructor() {

        this.currentUserLocationCoords = {};

        this.getCurrentUserPosition = function() {

            if (navigator.geolocation) {
                return new Promise(function(resolve, reject) {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
            } else {
                console.log("Geolocation is not supported");
            }

        }

    }


    get userLocationCoords() {
        return this.currentUserLocationCoords;
    }

    set userLocationCoords(position) {
        this.currentUserLocationCoords = {
            lon: Math.round(position.coords.longitude),
            lat: Math.round(position.coords.latitude)
        };
    }

}

export default GeolocationService;