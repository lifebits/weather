class GeolocationService {

    constructor($http) {

        this.currentUserLocationCoords = {};

        this.getUserPosition = function() {

            return this.tryNavigatorGeolocation().then(
                result => result,
                error => this.tryAPIGeolocation()
            )

        };

        this.tryNavigatorGeolocation = function() {
            if (navigator.geolocation) {
                return new Promise(function(resolve, reject) {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
            } else {
                console.log("Geolocation is not supported");
            }
        };

        this.tryAPIGeolocation = function() {
            return $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU").then(
                response => response
            )
        };

    }


    get userLocationCoords() {
        return this.currentUserLocationCoords;
    }

    set userLocationCoords(newPosition) {

        let newCoords;

        if ('data' in newPosition) {
            newCoords = {
                lon: Math.round(newPosition.data.location.lng),
                lat: Math.round(newPosition.data.location.lat)
            }
        }

        if ('coords' in newPosition) {
            newCoords = {
                lon: Math.round(newPosition.coords.longitude),
                lat: Math.round(newPosition.coords.latitude)
            }
        }

        this.currentUserLocationCoords = newCoords;

    }

}

GeolocationService.$inject = ['$http'];

export default GeolocationService;