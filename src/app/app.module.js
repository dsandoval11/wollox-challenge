import angular from 'angular';
import 'angular-route';
import './core/app.components';
import configRouter from './app.router';

angular.module('challenge', [
  'ngRoute',
  'challenge.components'
])
  .config(['$routeProvider', configRouter]);
