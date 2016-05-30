'use strict';

import './style/index.scss'

import angular from 'angular'


export default angular.module('customListCities', [])

    .component('listCities', require('./listCities.component'))

    .service('ListCitiesDataService', require('./listCities.data.service'))

    .name;