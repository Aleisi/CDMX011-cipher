//Se ejecuta la lógica de la aplicación por medio de funciones
const cipher = {
  //Creamos un objeto para cifrar que toma dos argumentos 
  //mensaje a cifrar y offset, es el desplazamiento, número de posiciones que queremos mover a la derecha en en alfabeto
  "encode": function (offset, mensaje) {

    //parametros para convertir el mensaje a MAYUSCULAS y
    //para eliminar los espacios en blanco de ambos extremos del mensaje
    mensaje = mensaje.toUpperCase().trim()

    //para convertir en numero entero el argumento offset
    offset = parseInt(offset);

    //variable almacenará el valor que tienen las letras en el Código Ascii.
    let asciiValue = 0;
    //Variable que guardará el resultado 
    let result = "";

    //Usamos for para que recorra el mensaje/string y lo deja de recorrer hasta que termine el string 
    //mientras el indice sea menor a la longitud del mensaje se le agregara la i/1 
    for (let i = 0; i < mensaje.length; i++) {
      //y aplicamos charCodeAt convetir el valor del mensaje/string en valor del codigo Ascii,
      // la i indica la posicion del string , por eso se va a ir recorriendo uno a uno con el for
      let stringAscii = mensaje.charCodeAt(i)

      if (stringAscii == 32) {
        asciiValue = 32
      }
      //Aplicamos operador lógico && para distinguir entre dos posibilidades
      //Para obtener mayúsculas condicionamos la variable dentro del rango entre 65 y 90
      else if ((stringAscii >= 65) && (stringAscii <= 90)) {
        //Si es true aplicamos la fórmula 
        asciiValue = ((stringAscii - 65 + offset) % 26) + 65;
      }

      //PAra obtener minúsculas condicionamos la variable dentro del rango entre 97 y 123
      else if ((stringAscii >= 97) && (stringAscii <= 122)) {
        //Si es true  se aplica la fórmula 
        asciiValue = ((stringAscii - 97 + offset) % 26) + 97;
      }

      //Para obtener desde el código Ascii el mensaje descifrado  
      //A cada valor Ascii de nuestra cadena aplicamos String.fromCharCode para que nos retorne la letra correspondiente
      let mensajeEncode = String.fromCharCode(asciiValue)

      //concatenamos todos las letras nuevas y las guardamos en resultado
      result += mensajeEncode;

    }
    //Retornamos el resultado de la cadena con las letras ya sustituidas
    return result;
  },


  "decode": function (offset, mensaje) {

    //convertir el mensaje a MAYUSCULAS y
    //eliminamos los espacios en blanco de ambos extremos de la cadena
    mensaje = mensaje.toUpperCase().trim()

    //para convertir en numero entero el argumento offset
    offset = parseInt(offset);

    //variable almacenará el valor que tienen las letras en el Código Ascii.
    let asciiValue = 0

    //Variable que guardará el resultado 
    let result = ""

    //Usamos for para recorrer la cadena
    for (let i = 0; i < mensaje.length; i++) {
      //y aplicamos charCodeAt para obtener la posicion en valor Ascii, se almacena en la variable
      let stringAscii = mensaje.charCodeAt(i)

      if (stringAscii == 32) {
        asciiValue = 32
      }
      //Para obtener mayúsculas condicionamos la variable dentro del rango entre 65 y 91
      else if ((stringAscii >= 65) && (stringAscii <= 90)) {
        //Si es true aplicamos la fórmula 
        asciiValue = ((stringAscii + 65 - offset) % 26) + 65;
      }

      //PAra obtener minúsculas condicionamos la variable dentro del rango entre 97 y 123
      else if ((stringAscii >= 97) && (stringAscii <= 122)) {
        //Si es true  se aplica la fórmula 
        asciiValue = ((stringAscii - 97 + (26 - offset)) % 26) + 97;
      }

      //Para obtener desde el código Ascii el mensaje descifrado  
      //A cada valor Ascii de nuestra cadena aplicamos String.fromCharCode para que nos retorne la letra correspondiente
      let mensajeEncode = String.fromCharCode(asciiValue)

      //Se concatenan las letras nuevas
      result += mensajeEncode;
    }
    return result;
  },
}
export default cipher

