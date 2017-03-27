angular
  .module('stockApp')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/search', {
      templateUrl: 'assets/stock/stock-table/stock.template.slim',
      controller: 'DataController',
      controllerAs: 'vm',
      resolve: {
        stocks: function(getStock, $route) {

          return getStock.getData($route.current.params.date, $route.current.params.code).then(function(res) {
            return res.data;
          });
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  });
