'use strict';

/**
 * @ngdoc overview
 * @name sushantkumargadiApp
 * @description
 * # sushantkumargadiApp
 *
 * Main module of the application.
 */
angular
  .module('sushantkumargadiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angulike'
  ])
  .config(function ($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true);  
    //$locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/functional-reactive-programming', {
        templateUrl: 'views/functional-reactive-programming.html',
        controller: 'FunctionalReactiveProgrammingCtrl',
        controllerAs: 'functionalRactiveProgrammingCtrl'
      })
      .when('/spring-5-reactive-programming-in-action', {
        templateUrl: 'views/spring-5-reactive-programming-in-action.html',
        controller: 'Spring5ReactiveProgrammingInActionCtrl',
        controllerAs: 'spring5ReactiveProgrammingInActionCtrl'
      })
      .when('/restful-services-using-node-mongo-express', {
        templateUrl: 'views/restful-services-using-node-mongo-express.html',
        controller: 'RestfulServicesUsingNodeMongoExpressCtrl',
        controllerAs: 'restfulServicesUsingNodeMongoExpressCtrl'
      })
       .when('/spring-cloud', {
        templateUrl: 'views/spring-cloud.html',
        controller: 'SpringCloudCtrl',
        controllerAs: 'springCloud'
      })
    .when('/angular2', {
        templateUrl: 'views/angular2.html',
        controller: 'Angular2Ctrl',
        controllerAs: 'angular2'
      })
      .when('/swagger', {
        templateUrl: 'views/swagger.html',
        controller: 'SwaggerCtrl',
        controllerAs: 'swagger'
      })
      .when('/maven-build-profiles', {
        templateUrl: 'views/maven-build-profiles.html',
        controller: 'MavenBuildProfilesCtrl',
        controllerAs: 'mavenBuildProfiles'
      })
      .when('/rest-template-proxy', {
        templateUrl: 'views/rest-template-proxy.html',
        controller: 'RestTemplateProxyCtrl',
        controllerAs: 'restTemplateProxy'
      })
      .when('/hibernate-history-tables', {
        templateUrl: 'views/hibernate-history-tables.html',
        controller: 'HibernateHistoryTablesCtrl',
        controllerAs: 'hibernateHistoryTables'
      })
      .when('/cross-cutting-audit-logging', {
        templateUrl: 'views/cross-cutting-audit-logging.html',
        controller: 'CrossCuttingAuditLoggingCtrl',
        controllerAs: 'crossCuttingAuditLoggingCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode(true)
  });
