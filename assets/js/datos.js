'use strict'

//Funciones
function buscarEmpleado(empleados) {
    let busqueda = prompt("Introduce el numero de DNI: ");
    
    for (let index = 0; index < empleados.length; index++) {
        if (empleados[index].id == busqueda) {
            alert("¡Encontrado!");
            console.log(empleados[index])
            return; // Exit the function after finding the employee
        }
    }

    alert("No se ha encontrado");
}

function aniadirEmpleado(empleados){
    
    let id = prompt("Introduce el dni: ");
    let nombre = prompt("Introduce el nombre: ");
    let edad = prompt("Introduce la edad: ");
    let genero = prompt("Introduce el genero: ");
    let puesto = prompt("Introduce el puesto: ");
    
    let empleadosAux = [
        {id: id},
        {nombre: nombre},
        {edad: edad},
        {sexo: genero},
        {puesto: puesto},
    ];
    empleados.push(empleadosAux);
    console.log(empleados);
}

function borrarEmpleado(empleados) {
    let dniABorrar = prompt("Introduce el dni del registro que quieras borrar: ");
    
    let index = empleados.findIndex(empleado => empleado.id == dniABorrar);
    
    if (index !== -1) {
        empleados.splice(index, 1);
        alert("¡Empleado borrado exitosamente!");
    } else {
        alert("No se ha encontrado un empleado con ese DNI.");
    }
}

//Flujo
let datosAlumnos = `12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora`;

let datosSeparados = datosAlumnos.split("\n");
let empleados = new Array();
for (let index = 0; index < datosSeparados.length; index++) {
    let datosLinea = datosSeparados[index].split(",");
    let empleadosAux = {
        id: datosLinea[0],
        nombre: datosLinea[1],
        edad: datosLinea[2],
        sexo: datosLinea[3],
        puesto: datosLinea[4],
    };
    empleados.push(empleadosAux);
}



buscarEmpleado(empleados);
aniadirEmpleado(empleados);
borrarEmpleado(empleados);

console.log(empleados);
