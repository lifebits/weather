'use strict';

import './style/index.scss'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import restangular from 'restangular'

import routing from './app.weather.config'

import customListCities from '../customListCities/index'

export default angular.module('app.weather', [uiRouter, 'restangular', customListCities])
    .config(routing)

    .component('weatherSingleCity', require('./weather.singleCity.component'))

    .factory('OpenWeatherMap', require('./openweathermap.factory'))

    .service('GetWeatherService', require('./getWeather.service'))
    .service('WeatherIconService', require('./weatherIcon.service'))
    .service('WindDirectionService', require('./windDirection.service'))

    .name;