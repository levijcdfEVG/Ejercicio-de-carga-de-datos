'use strict'

//Funciones
function buscarEmpleado(empleados) {
    let busqueda = prompt("Introduce el numero de DNI: ");
    
    for (let index = 0; index < empleados.length; index++) {
        if (empleados[index].id == busqueda) {
            alert("¡Encontrado!");
            alert(JSON.stringify(empleados[index]));
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
    
    let empleado = {
        id: id,
        nombre: nombre,
        edad: edad,
        sexo: genero,
        puesto: puesto
    };
    
    empleados.push(empleado);
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

// Función para cargar los datos desde el archivo de texto
function cargarDatosConFetch(){
    fetch('/home/levijcdf/Documents/GitHub/Ejercicio-de-carga-de-datos/empleados2DAW.txt') // Ruta del fichero
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el fichero");
        }
        return response.text();  // Leer el archivo como texto
    })
    .then(data => {
        let empleados = cargarDatos(data);  // Procesar los datos en empleados
        mostrarEmpleados(empleados);        // Mostrar la lista de empleados en consola
        
        // Realizar las operaciones del primer ejercicio
        buscarEmpleado(empleados);
        aniadirEmpleado(empleados);
        borrarEmpleado(empleados);

        // Mostrar el resultado final en consola
        console.log(empleados);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Función para procesar los datos del archivo de texto y convertirlos en objetos empleados
function cargarDatos(data) {
    let empleados = [];
    let datosSeparados = data.split("\n");
    
    for (let index = 0; index < datosSeparados.length; index++) {
        let datosLinea = datosSeparados[index].split(",");
        
        if (datosLinea.length === 5) { // Asegurarse que tenga todos los campos
            let empleado = {
                id: datosLinea[0],
                nombre: datosLinea[1],
                edad: datosLinea[2],
                sexo: datosLinea[3],
                puesto: datosLinea[4]
            };
            empleados.push(empleado);
        }
    }
    
    return empleados;
}

// Función para mostrar los empleados cargados en la consola
function mostrarEmpleados(empleados) {
    console.log("Lista de empleados:");
    empleados.forEach(empleado => {
        console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Sexo: ${empleado.sexo}, Puesto: ${empleado.puesto}`);
    });
}

// Ejecutar la carga de datos y las operaciones
cargarDatosConFetch();
