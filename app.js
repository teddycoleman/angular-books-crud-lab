angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/book.html',
      controllerAs: 'bookCtrl',
      controller: 'BookController'
    })
    .when('/books/:id', {
      templateUrl: '/templates/book-show.html',
      controllerAs: 'bookShowCtrl',
      controller: 'BookShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
