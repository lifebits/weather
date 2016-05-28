class TimeService {

    constructor(GetWeatherService, TimeZoneRestangular) {

        const date = TimeZoneRestangular.all('');

        this.getCurrentTimeByCoord = function(_lat, _lng) {
            let lat = _lat || GetWeatherService.weather.location.coord.lat;
            let lng = _lng || GetWeatherService.weather.location.coord.lon;

            return date.get('', {lat: lat, lng: lng}).then(
                response => {
                    return response
                }, error => {
                    console.log(error);
                }
            )
        };

        this.checkNight = function(_sunrise, _sunset) {
            let sunrise = _sunrise || GetWeatherService.weather.sunrise;
            let sunset = _sunset || GetWeatherService.weather.sunset;
            let currentTime = GetWeatherService.weather.timeStamp;

            return currentTime <= sunrise || currentTime >= sunset
        }

    }

    get timeCurrentCity() {
        return this.currentTime
    }

    set timeCurrentCity(newData) {
        this.currentTime = {
            status: newData.status,
            message: newData.message,
            countryCode: newData.countryCode,
            zoneName: newData.zoneName,
            abbreviation: newData.abbreviation,
            gmtOffset: newData.gmtOffset,
            dst: newData.dst,
            timestamp: newData.timestamp,
            timestampMs: newData.timestamp*1000
        };
    }

}

TimeService.$inject = ['GetWeatherService', 'TimeZoneRestangular'];

export default TimeService