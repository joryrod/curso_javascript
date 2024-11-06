// Haciendo uso de las funciones de tipo closure

// ejercicio 1
// pedir añ usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de vinvenida mas el nombre que ingreso el usuario.

let usuario = (function() {
    let nombre;
    let edad;
  
    return {
      ingresarDatos: function(nombreUsuario, edadUsuario) {
        nombre = nombreUsuario;
        edad = edadUsuario;
      },
      verificarEdad: function() {
        if (edad >= 18) {
          return true;
        } else {
          return false;
        }
      },
      mostrarBienvenida: function() {
        if (usuario.verificarEdad()) {
          console.log("Bienvenida, " + nombre + "!");
        } else {
          console.log("Lo sentimos, debes ser mayor de 18 años.");
        }
      }
    };
  })();

var nombreUsuario = prompt("Ingrese su nombre:");
var edadUsuario = parseInt(prompt("Ingrese su edad:"));
usuario.ingresarDatos(nombreUsuario, edadUsuario);
usuario.mostrarBienvenida();