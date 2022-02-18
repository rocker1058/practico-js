// Codigo del cuadrado

console.group("Cuadrado")

//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {

    return lado *4;
}


//console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + "cm");

function areaCuadrado(lado){

    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm");

console.groupEnd()

// Codigo del triangulo

console.group("Triangulo")

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
); */

/* const alturaTriangulo= 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm"); */

function perimetroTriangulo (lado1, lado2, base){

    return lado1 + lado2 + base;
}

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){

    return (base* altura) / 2;
}

//console.log("El area del triangulo es: " + areaTriangulo + "cm");

console.groupEnd();

// codigo del circulo

console.group("Circulo")

/* const radioCirculo = 4; 
console.log("El radio del circulo es: " + radioCirculo + "cm"); */

function diametroCirculo(radio) {
    return radio * 2;
}


const PI = Math.PI;




function perimetroCirculo(radio) {

    const diametro = diametroCirculo(radio);

    return diametro * PI;
}


function areaCirculo(radio){

    return  (radio * radio) * PI;
} 


console.groupEnd();

// Interactuamos con el HTML

function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert(perimetro);

}