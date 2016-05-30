'use strict';

import './style/index.scss'

import angular from 'angular'

export default angular.module('citiesSwitcher', [])

    .component('citiesSwitcher', require('./citiesSwitcher.component'))

    //.service('ListCitiesDataService', require('./listCities.data.service'))

    .name;