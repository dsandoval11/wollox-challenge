import angular from 'angular';
import ListappService from '../services/list.service';
import StorageService from '../services/storage.service';

const services = [
  {
    name: 'listService',
    service: ListappService,
  },
  {
    name: 'storageService',
    service: StorageService,
  }
];

angular.module('challenge.services', []);
services.forEach((service)=> {
  angular.module('challenge.services')
    .service(service.name, service.service);
});
