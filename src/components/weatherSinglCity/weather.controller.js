class WeatherController {

    constructor(TimeService, GetWeatherService, WeatherIconService, WindDirectionService, ListCitiesDataService) {

        this.weather = GetWeatherService.weather;
        this.weatherIcon = WeatherIconService.getWeatherIconClass();
        this.windDirection = WindDirectionService.getWindDirection(this.weather.wind.deg);

        this.checkNight = TimeService.checkNight();

        this.currentCityTime = TimeService.timeCurrentCity;

        GetWeatherService.getWeatherByCityNameOnFiveDays(this.weather.location.city).then(
            result => {
                this.weatherForecast = result;
            }
        );

        this.saveCity = function(city) {
            ListCitiesDataService.listCities = this.weather.location.city;
        };

    }

}

WeatherController.$inject = ['TimeService', 'GetWeatherService', 'WeatherIconService', 'WindDirectionService', 'ListCitiesDataService'];

export default WeatherController