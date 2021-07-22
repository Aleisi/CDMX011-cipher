//Importamos las funciones que han sido exportadas desde un módulo externo, manipulando el DOM.
import cipher from './cipher.js';

//Usamos getElementById para devolver el elemento que tiene el atributo ID con el valor especificado.
//y para manipularlo se adjunta un controlador de eventos al hacer click accedemos a al propiedad cifrar
document.getElementById("cifrar").addEventListener("click", function() {

    //Mandamos llamar el valor con el id del mensaje y del desplazamiento
    const mensaje = document.getElementById("mensaje").value;

    if (mensaje == "") {
        alert("Escribe tu mensaje");
    }

    const offset = document.getElementById("offset").value;
    
    if (offset == 0) {
        alert("Elije el número de desplazamientos");
    }

    //ALmacenamos el resultado en la variable// objeto nombre.nombrepropiedad accedemos a la propiedad
    const resultado = cipher.encode(offset, mensaje);

    //creamos variable para mostrar el resultado en el cuadro de texto que tiene id= mensaje2
    const verResultado = document.getElementById("mensaje2")
    verResultado.innerHTML = resultado;

})

const decodeBtn = document.getElementById("descifrar")

decodeBtn.addEventListener("click", function () {

    const mensaje = document.getElementById("mensaje").value;
    const offset = document.getElementById("offset").value;

    const resultado = cipher.decode(offset, mensaje);

    const verResultado = document.getElementById("mensaje2")
    verResultado.value = resultado;

    if (mensaje == "") {
        alert("Escribe tu mensaje");
    }

    else if (offset == 0) {
        alert("Elije el número de desplazamientos");
    }
})