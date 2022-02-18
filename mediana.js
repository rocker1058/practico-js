
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {

            return valorAcomulado + nuevoElemento;
        }
    );

    const promedoLista = sumaLista / lista.length

    return promedoLista;
}

let listaFinal;
let mediana;

function calcularMediana(lista) {


    let listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    })
    listaFinal = listaOrdenada;

    const mitadListaFinal = parseInt(listaFinal.length / 2);

    console.log(listaFinal)

    function esPar(numerito) {
        if (numerito % 2 === 0) {

            return true;

        } else {

            return false;
        }
    }


    if (esPar(listaFinal.length)) {

        const elemento1 = listaFinal[mitadListaFinal - 1];
        const elemento2 = listaFinal[mitadListaFinal];

        const promedio1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedio1y2;


    } else {

        mediana = listaFinal[mitadListaFinal];
    }

    mediana

}