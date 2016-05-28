'use strict';

import './style/main.scss'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import restangular from 'restangular'
import ngStorage from 'ngstorage'

import _ from 'lodash'

import routing from './app.config'

import weather from './components/weatherSinglCity/index'
import customListCities from './components/customListCities/index'

angular.module('app', [uiRouter, 'ngStorage', 'restangular', weather, customListCities])

    .config(routing)

    .component('pageNotFound', require('./404.component'))

    .factory('TimeZoneRestangular', require('./timezonedb.factory'))
    .service('GeolocationService', require('./geolocation.service'))
    .service('TimeService', require('./time.service'))

;