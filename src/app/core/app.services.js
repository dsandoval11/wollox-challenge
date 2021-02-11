import angular from 'angular';
import ListappService from '../services/list.service';
import StorageService from '../services/storage.service';
import SignupService from '../services/signup.service';
import AuthService from '../services/auth.service';

const services = [
  {
    name: 'listService',
    service: ListappService,
  },
  {
    name: 'storageService',
    service: StorageService,
  },
  {
    name: 'signupService',
    service: SignupService
  },
  {
    name: 'authService',
    service: AuthService,
  }
];

angular.module('challenge.services', []);
services.forEach((service)=> {
  angular.module('challenge.services')
    .service(service.name, service.service);
});
