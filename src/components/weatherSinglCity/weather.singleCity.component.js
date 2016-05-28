import weatherTemplate from './views/weather-singleCity.html'
import weatherController from './weather.controller.js'

export default {
    restrict: 'E',
    bindings: {},
    template: weatherTemplate,
    controller: weatherController
}