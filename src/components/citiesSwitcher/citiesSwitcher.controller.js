class CitiesSwitcherController {

    constructor(GetWeatherService, $scope, $element, $state) {

        this.currentCity = GetWeatherService.weather.location.city;
        this.currentCountry = GetWeatherService.weather.location.country;

        this.changeCity = () => {
            $state.go('weather', {city: this.currentCity});
        };

        $scope.$watch(() => {
            this.currentCityFieldWidth = $element[0].querySelector('.fake-cityName').offsetWidth;
        });

    }

}

CitiesSwitcherController.$inject = ['GetWeatherService', '$scope', '$element', '$state'];

export default CitiesSwitcherController