class GetWeatherService {

    constructor(OpenWeatherMap, $filter) {

        const weather = OpenWeatherMap.all("weather");
        const forecast = OpenWeatherMap.all("forecast");

        this.getWeatherByCityName = function(cityName) {
            return weather.get('', {q: cityName}).then(
                response => response
            )
        };

        this.getWeatherByGeoCoords = function(cityCoords) {
            return weather.get('', {lat: cityCoords.lat, lon: cityCoords.lon}).then(
                response => response
            )
        };

        // Бесплатный API -> жуткий геморой
        this.getWeatherByCityNameOnFiveDays = function(cityName) {
            return forecast.get('', {q: cityName}).then(
                response => {
                    let result = response.list;
                    let weatherDay = {};
                    //console.log(response);

                    result.forEach(function(item) {

                        let day = $filter('date')(item.dt*1000, 'EEE', 'UTC');
                        let maxTemp = item.main['temp_max'];
                        let minTemp = item.main['temp_min'];
                        let weatherId = item.weather[0].id;

                        // Полям присваеваем все значения в течени дня, в виде массива значений
                        if ( !weatherDay[day] ) weatherDay[day] = {};

                        ( _.isArray(weatherDay[day].weatherEveryThreeHours) ) ? weatherDay[day].weatherEveryThreeHours.push(item) : weatherDay[day].weatherEveryThreeHours = [];
                        ( _.isArray(weatherDay[day].tempMax) ) ? weatherDay[day].tempMax.push(maxTemp) : weatherDay[day].tempMax = [];
                        ( _.isArray(weatherDay[day].tempMin) ) ? weatherDay[day].tempMin.push(minTemp) : weatherDay[day].tempMin = [];
                        ( _.isArray(weatherDay[day].weatherId) ) ? weatherDay[day].weatherId.push(weatherId) : weatherDay[day].weatherId = [];

                    });

                    //console.log(weatherDay);

                    _.forIn(weatherDay, function(item, key) {
                        let maxTempDay = _.max(item.tempMax);
                        let minTempDay = _.min(item.tempMin);
                        let weatherIdDay;

                        // Ищем преобладающий идентификатор погоды
                        let o = { freq: { }, most: '' };
                        item.weatherId.forEach(function(s) {
                            o.freq[s] = (o.freq[s] || 0) + 1;
                            if(!o.freq[o.most] || o.freq[s] > o.freq[o.most])
                                o.most = s;
                        });
                        weatherIdDay = o.most;

                        // Сохраняем все что нам нужно
                        weatherDay[key].maxTempDay = Math.round(maxTempDay);
                        weatherDay[key].minTempDay = Math.round(minTempDay);
                        weatherDay[key].weatherIconDay = 'wi-owm-' + weatherIdDay;
                    });

                    return weatherDay;
                }
            )
        }

    }

    get weather() {
        return this.currentWeather
    }

    set weather(newObject) {
        this.currentWeather = {
            location: {
                city: newObject.name,
                country: newObject.sys.country,
                coord: {
                    lon: newObject.coord.lon,
                    lat: newObject.coord.lat
                }
            },
            timeStamp: newObject.dt,
            sunrise: newObject.sys.sunrise,
            sunset: newObject.sys.sunset,
            weatherId: newObject.weather[0].id,
            weatherIconCode: newObject.weather[0].icon,
            description: newObject.weather[0].description,
            currentTemp: Math.round(newObject.main.temp),
            wind: {
                speed: newObject.wind.speed,
                deg: newObject.wind.deg
            },
            humidity: newObject.main.humidity
        };
    }

}

GetWeatherService.$inject = ['OpenWeatherMap', '$filter'];

export default GetWeatherService;