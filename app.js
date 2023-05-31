/* console.log("Hola Mundo")
console.log(2+3)
console.log('Hola la temp de hoy es: ', 8, '°C')
 esto esta comentado
*/
const letrasContainer = 
                    document.getElementById("letras-container");
const opcionesContainer =
                     document.getElementById('opciones-container');
const seccionIngresarUsuario = 
                document.getElementById("seccion-ingresar-usuario");
const nuevoJuegoContainer =
                document.getElementsByClassName("nuevo-juego-container");
const nuevoJuegoButton =
            document.getElementById("nuevo-juego-button");
const canvas = document.getElementById("canvas");
const resultadoTexto = document.getElementById("resultado-texto");

let opciones = {
    frutas : [
        "Manzana",
        "Frutilla",
        "Pera",
        "Sandia",
        "Naranja",
        "Mandarina",
        "Limon",
        "Uva",
    ],
    animales:[
        "perro",
        "gato",
        "hamster",
        "nutria",
        "jirafa",
        "leon",
        "Pantera",
        "rinoceronte",
    ],
    paises:[
        "Argentina",
        "Brasil",
        "Alemania",
        "Estados Unidos",
        "España",
        "Chile",
        "Irlanda",
        "Africa",
    ],
}