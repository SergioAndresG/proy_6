// definimos la variable math como constante y de tipo objeto
const math = {};

// de finimos la funcion flecha invertirNumero como constante como parametro numero
const invertirNumero = numero => {
    // definimos invertido como variable y de tipo number
    let invertido = 0;
    // ciclo while que se repite mientras en nuemro sea diferente de 0
    while (numero != 0) {
    // Esto calcula el residuo de la división de "numero" por 10, lo que es equivalente al último dígito de "numero".
        invertido = 10 * invertido + numero % 10
    // esto realiza la siguiente operación: 1. `numero / 10`: Divide el valor contenido en la variable     
        numero = (Math.floor(numero / 10))
    }
    // el return, nos devolvera el valor invertido
    return invertido
};
// con esta constante, devolveremos la cadena, de numeros a textos
const invertirNumeroComoTexto = numero => {
// con numero.toString, la cadena de convierte de numeros a texto
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
// con el return, nos devolvera el numero, completamente en texto
    return numeroInvertidoComoTexto;
}
// definimos una constante para invertir el texto que indiquemos
const invertirTexto = texto => {
    // con split, dividimos una cadena delimitada en subcadenas 
    const splitText = texto.split('');
    // esta constante, el texto saldra al reves
    const reversedText = splitText.reverse();
    // al ejecutar el codigo, esto nos devolvera la cadena
    const joinedText = reversedText.join('');
    // con le return nos devolvera el texto al reves
    return joinedText;
};
    // con esta constante invertiremos un arreglo de caracteres o una cadena de texto y devolver el resultado.
const invertirArreglo = arreglo => {
    // definimos lo que le queremos hacer al texto que sera invertirlo
    const reverseObject = arreglo.reverse();
    // el return, nos devolvera el texto invertido
    return reverseObject;
};
    //la constante conversionDatos es para el procesamiento o conversión de datos en base al valor pasado como data.
const conversionDatos = data => {
    // dataType la utilizaremos para obtener el tipo de datos de la variable `data`
    let dataType = typeof data;
    // como no le asignamos ningun valor, dataVarserá "undefinido".
    let dataVar;
    /* describeremos esta funcion por completo,la funcion comienza con una serie de comprobaciones, para saber si el valor de data, es 
     es verdadero o falso, si la cadena de data esta vacia, la variable dataVar indicara que el valor ingresado es falso o incorrecto*/
    if (data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingersado esta vacio o incorrecto';
    }else {
        console.log(`El valor ingresado es de tipo : ${dataType}, con valor de: ${data}`);
        switch (dataType) {
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
            default:
                dataVar = 'El valor ingresado no se puede invertir';
        }
    }
    return dataVar;
}
// con estas funciones podremos diseñar y manipular diferrentes tipos de datos, como los son los numeros, el texto, y su debida organizacion
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertitArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;
