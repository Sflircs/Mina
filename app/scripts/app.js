'use strict';

/**
 * @ngdoc overview
 * @name minaApp
 * @description
 * # minaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('minaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

app.config(function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/', '/main/all');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'scripts/modules/main/views/ui-view.html'
    })
    .state('main.all', {
      url: '/all',
      templateUrl: 'scripts/modules/main/views/all.html',
      controller: 'MainAllCtrl'
    })
    .state('main.detail', {
      url: '/{id:int}',
      templateUrl: 'scripts/modules/main/views/detail.html',
      controller: 'MainDetailCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'scripts/modules/about/views/ui-view.html'
    })
    .state('about.all', {
      url: '/all',
      templateUrl: 'scripts/modules/about/views/all.html',
      controller: 'AboutAllCtrl'
    })
    .state('about.detail', {
      url: '/{id:int}',
      templateUrl: 'scripts/modules/about/views/detail.html',
      controller: 'AboutDetailCtrl'
    });
});

//app.value("AppInfo", AppInfo);


