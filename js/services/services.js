//tabla Lotes
app.service('misLotes', function(){
    var vm = this
    vm.datosLotesMascaras = function(){
        return [
          {
              id : 0,
              mascara : "Sueldos",
              prioridad : 1,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 1,
              mascara : "Honorarios",
              prioridad : 1,
              visibilidad: "Externa",
              asignada: "No",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 2,
              mascara : "Cred. Univ.Doc.",
              prioridad : 2,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 3,
              mascara : "UVHI",
              prioridad : 3,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Inhabilitado",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
        ]
    };

    vm.datosLotesSuscriptores = function(){
        return [
          {
            id : 0,
            entidad : "AMEX Camapaña 2016-Jun",
            negocio : "Preembozado",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 1,
            entidad : "Asignacion Universal por hijo",
            negocio : "ANSES",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 2,
            entidad : "Base Blockbuster año 2000",
            negocio : "Preevaluación s/ persona",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 3,
            entidad : "Fiat auto plan  - Rosario",
            negocio : "PAS",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 4,
            entidad : "Fiat auto plan - CABA",
            negocio : "PAS",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 5,
            entidad : "Garbarino",
            negocio : "Pas",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Inhabilitado"
          },
          {
            id : 6,
            entidad : "Ministerio de relaciones Extreriores",
            negocio : "Colectivos",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 7,
            entidad : "UADE - Docenter(cred)",
            negocio : "Universidades",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Inhabilitado"
          },
        ]
    };

    //MENU PRINCIPAL DE LA APLICACIÓN
    vm.listaMenu = function(){
        return ['Inicio',
                'Cambiar empresa',
                'Ver cuenta personal',
                'Claves y usuarios',
                'Certificado digital',
                'Mensajes y avisos',
                'Contáctenos',
                'Tutoriales',
                'Salir']
    };

    //MENU LATERAL DERECHO
    vm.sidebarMenu = function(){
        return [
          {
            titulo: 'Negocios',
            cantidad: 10,
            link: '#/negocios'
          },
          {
            titulo: 'Mascaras',
            cantidad: 100,
            link: '#/mascaras'
          },
          {
            titulo: 'Entidades',
            cantidad: 10,
            link: '#/entidades'
          },
          {
            titulo: 'Suscriptores',
            cantidad: 356789,
            link: '#/suscriptores'
          },
          {
            titulo: 'Supervisor',
            cantidad: 3,
            link: '#/supervisor'
          },
          {
            titulo: 'Vendedores',
            cantidad: 22,
            link: '#/vendedores'
          }
        ]
    };
});
