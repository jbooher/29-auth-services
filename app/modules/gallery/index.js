import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let gallery = angular.module('jb.gallery', []);

gallery.config(config);
gallery.controller("GalleryController", controller);
gallery.service("GalleryService", service);
