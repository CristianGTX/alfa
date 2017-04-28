app.controller("suscriptoresCtrl", function($scope, misLotes){
  var vm = this;
  vm.filtroActivo = false;
  vm.opcionSeleccionada = -1;

  //Lista de opciones del menu derecho
  vm.sidebarMenu = misLotes.sidebarMenu();

  //Datos que se van a cargar en la tabla de mascaras
  vm.tablaSuscriptores = misLotes.datosLotesSuscriptores();

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

  vm.toggleFiltro = function() {
    vm.filtroActivo = !vm.filtroActivo;
  };

  //Función para cerrar el menu Adicional
  // document.addEventListener("click", function (e) {
  //   var level = 0;
  //   for (var element = e.target; element; element = element.parentNode) {
  //     if (element.id === 'content-area') {
  //         console.log( "content-area clicked");
  //       return;
  //     }
  //     level++;
  //   }
  //   vm.abreOpciones(-1);
  // });

});
