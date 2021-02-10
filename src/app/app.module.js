import angular from 'angular';
import 'angular-route';
import 'ngstorage';
import './styles/main.scss';
import './core/app.components';
import './core/app.constans';
import './core/app.services';

import configRouter from './app.router';

angular.module('challenge', [
  'ngRoute',
  'ngStorage',
  'challenge.components',
  'challenge.services',
  'challenge.constants'
])
  .config(['$routeProvider', configRouter]);
