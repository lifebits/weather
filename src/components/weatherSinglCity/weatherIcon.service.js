/* Icons are loaded in weather-icons.css */
class WeatherIconService {

    constructor(GetWeatherService, TimeService) {

        this.getWeatherIconClass = (_weatherCode, neutral) => {
            let weatherCode = _weatherCode || GetWeatherService.weather.weatherId;

            let weatherClassName = 'wi-owm';

            if (neutral) {
                return weatherClassName + '-' + weatherCode;
            }

            let day = TimeService.checkNight() ? 'night' : 'day';
            return weatherClassName + '-' + day + '-' + weatherCode;
        };

    }

}

WeatherIconService.$inject = ['GetWeatherService', 'TimeService'];

export default WeatherIconService