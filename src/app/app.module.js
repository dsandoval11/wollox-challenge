import angular from 'angular';
import 'angular-route';
import './styles/main.scss';
import './core/app.components';
import configRouter from './app.router';

angular.module('challenge', [
  'ngRoute',
  'challenge.components'
])
  .config(['$routeProvider', configRouter]);
