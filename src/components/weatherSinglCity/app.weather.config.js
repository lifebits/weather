routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {

    $stateProvider
        .state('weather', {
            url: '/:city',
            resolve: {
                weatherInit: ['GetWeatherService', 'TimeService', '$stateParams',
                    function(GetWeatherService, TimeService, $stateParams) {
                        let cityName = $stateParams.city;
                        return GetWeatherService.getWeatherByCityName(cityName).then(
                            result => GetWeatherService.weather = result
                        ).then(
                            () => TimeService.getCurrentTimeByCoord()
                        ).then(
                            time => TimeService.timeCurrentCity = time
                        ).catch(error => {
                            console.log(error)
                        });
                    }]
            },
            template: '<weather-single-city/>'
        })

        .state('geolocation', {
            url: '/geolocation/',
            resolve: {
                weatherInit: ['GetWeatherService', 'TimeService', '$stateParams', 'GeolocationService',
                    function(GetWeatherService, TimeService, $stateParams, GeolocationService) {
                        return GeolocationService.getUserPosition()
                            .then(function(position) {
                                return GeolocationService.userLocationCoords = position;
                            }).then(
                                () => GetWeatherService.getWeatherByGeoCoords(GeolocationService.userLocationCoords)
                            ).then(
                                result => GetWeatherService.weather = result
                            ).then(
                                () => TimeService.getCurrentTimeByCoord()
                            ).then(
                                time => TimeService.timeCurrentCity = time
                            ).catch(error => {
                                console.log(error)
                            });
                    }]
            },
            template: '<weather-single-city/>'
        })

}
