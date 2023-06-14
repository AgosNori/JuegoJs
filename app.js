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
    frutas: [
        "Manzana",
        "Frutilla",
        "Pera",
        "Sandia",
        "Naranja",
        "Mandarina",
        "Limon",
        "Uva",
    ],
    animales: [
        "perro",
        "gato",
        "hamster",
        "nutria",
        "jirafa",
        "leon",
        "Pantera",
        "rinoceronte",
    ],
    paises: [
        "Argentina",
        "Brasil",
        "Alemania",
        "Estados Unidos",
        "España",
        "Chile",
        "Irlanda",
        "Africa",
    ],
};
// contadores
let winCount = 0;
let count = 0;
let chosenWord = "";

const displayOptions = () => {
    opcionesContainer.innerHTML += `<h3> Porfavor seleccione una opcion</h3>`;
    // innerHTML sirve para poder ingresar codigo html en js
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
    }
    opcionesContainer.appendChild(buttonCon);

};
const blocker = () => {
    let optionsButtons = document.querySelectorAll('.options');
    let letterButtons = document.querySelectorAll('.letters');

    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled.true;
    });

    nuevoJuegoContainer.classList.remove("hide");
};

//Generador de palabaras
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll('.options');
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });


    // inicializar el contenido de las letras en 0 y limpiamos lo anterior
    letrasContainer.classList.remove("hide");
    seccionIngresarUsuario.innerText = "";

    //Array: similar a una lista que puede ser reccorrida 
    //con un ciclo for 
    let optionArray = options[optionValue];

    // elegir una palabra aleatoria
    chosenWord = optionArray[Math.floor(Math.random() *
        optionArray.length)];
    // la funcion UpperCase devuelve la cadena en mayuscula
    chosenWord = chosenWord.toUpperCase();

    // remplazaremos las letras con "_"
    let displayItem =
        chosenWord.replace(/./g, '<span class="dashes">~</span>');

    seccionIngresarUsuario.innerHTML = displayItem;
};

// cuando se presione el boton de "nuveo juego"
// se debe reinciar todo
seccionIngresarUsuario.innerHTML="";
opcionesContainer.innerHTML="";
letrasContainer.classList.add("hide");
nuevoJuegoContainer.classList.add("hide");
letrasContainer.innerHTML="";

//crear las letras
for (let i= 65; i<91 ; i++){ // 65 al 90 son las letras en Mayusculas  y 97 al 122 son en minusculas
    let button= document.createElement("button");
    button.classList.add("letters");
    // de numeros a ASCII ( a - z)
    button.innerText = String.fromCharCode(i);

    // botones de los caracteres
    button.addEventListener("click",()=>{
        // la funcion split() divide un objeto en string 
        let charArray = chosenWord.split("");
        let dashes = document.getElementsByClassName("dashes");

        if (charArray.includes(button.innerText)){
            charArray.forEach((char, index)=>{
                if (char === button.innerText){
                    //reemplazar el espacio en blanco por el caracter 
                    dashes[index].innerText = char;
                    // incrementar el contador winCount
                    winCount += 1;
                    if (winCount == charArray.length){
                        resultadoTexto.innerHTML= `<h2 class="win-msg">Ganaste :) </h2>`;
                        // bloquear todos los botones
                        blocker();
                    }
                }
            })
        }
    })
}
