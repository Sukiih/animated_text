// Palabras que se mostrarán en pantalla:
const wordList = ["Sukiih", "says", "hello", "world !"];

// Inicializamos variables para mantener el índice de la palabra actual y el índice de la letra actual
let listIndex = 0, wordIndex = 0;

// Variable para controlar si el efecto de escritura está pausado o no
let isPaused = false;


let element = document.getElementById("main-background-code");

// Configurar el intervalo para el efecto de la escritura
let interval = setInterval(() => {
    // Si el efecto está pausado, salimos del intervalo
    if (isPaused)
        return;

    // Condicional para si se escribe toda la palabra
    if (wordIndex == wordList[listIndex].length) {
        // Cambia a la siguiente palabra
        listIndex += (listIndex + 1 == wordList.length) ? -listIndex : 1;
        // Reinicia el índice de la letra a cero
        wordIndex = 0;
        // Se pausa el efecto de escritura
        isPaused = true;

        // Configuramos un intervalo interno para borrar el texto
        let innerInterval = setInterval(() => {
            // Condicional de si el texto se borró
            if (element.innerText.length == 0) {
                // Se reanuda el efecto de la escritura
                isPaused = false;
                //limpio el intervalor
                clearInterval(innerInterval);
            } else {
                //Borrar el último carácter del texto
                element.innerText = element.innerText.substring(0, element.innerText.length - 1);
            }
        }, 100);
    } else {
        //Si no se ha escrito toda la palabra, se agrega la prox letra
        wordIndex += 1;
        element.innerText = wordList[listIndex].substring(0, wordIndex);
    }
}, 200); //tiempo animación letras
