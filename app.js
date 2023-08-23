require('colors');

const math = require('./proy_modules/math.js')

const math = async () => {

    console.log('hola SENA CBA\n'.red);

    const numeros = [1, 2, 800, 1000, 1283, 2811];
    for (const numero of numeros) {
        const invertidoComoNumero = math.InvertirNumero(nuemro);
        constinvertidoComoCadena = math.InvertirNumeroComoCadena(nuemro);
        console.log("El nuemro '%s' es '%s' invertido comomnuemro, y '%s' como cadena",
                    numero, invertidoComoNumero, invertidoComoCadena);
    }

    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y Desarrollo de software']
    for(let dato of datos ){
        const datoCovertido = math.invertirTexto(texto);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }

    const datos = [1234567, ' ADSO 2798618', [2798618, 'ADSO'] ]
    for(let dato of datos ){
        const datoConvertido = math.conversionDatos(dato);
        console.log(`El resultado de conversion es : ${datoConvertido}`);
    }
}

main();