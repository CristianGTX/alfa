var app = angular.module("app", ['ngRoute']);

app.controller('mainCtrl', function($scope, misLotes){
	var vm = this;
  vm.menuPrincipal = misLotes.listaMenu();
	vm.menuConSeparadores = [];
	vm.menuPrincipal.forEach(function(item, index) {
		vm.menuConSeparadores.push(item);
		if (vm.menuPrincipal.length > index + 1) vm.menuConSeparadores.push('|');
	});
});

app.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
      .when("/", {
        templateUrl: "templates/mascaras.html",
        controller: "mascarasCtrl as vm"
      })
      .when("/nuevaMascara", {
        templateUrl: "templates/nuevaMascara.html",
        controller: "nuevaMascaraCtrl as vm"
      })
			.when("/suscriptores", {
				templateUrl: "templates/suscriptores.html",
				controller: "suscriptoresCtrl as vm"
			})
      .otherwise({
        redirectTo: '/'
    });
});
