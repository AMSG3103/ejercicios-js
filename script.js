console.log("Ejercicio 1");

const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

var c = 100;
var j = 2;
var numerosPrimos =[];

for (; j < c; j++) {

  if(primo(j)) {
    numerosPrimos.push(j);
  }
}

console.log(numerosPrimos);

function primo (numero) {

  for (var i=2; i<numero; i++) {

    if(numero % i ===0) {
      return false;
    }
  }
  return numero !==1;
}

/*No supe si tenía que pnerle si era verdadero o falso
pero según yo quedo lo importante jeje */



console.log("Ejercicio 2");

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];


for (let i=0; i<ejercicio2.length; i++) {
  if(ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar){

    console.log(ejercicio2[i].nombre)
  }
}



console.log("Ejercicio 3");

let fibo = 1;
let fibo1 = 0;
let fibo2 = 0;

console.log( fibo);

fibo1 = fibo;

for (let i=0; i < 50; i++) {
  fibo=fibo1+fibo2;

  console.log(fibo);

  fibo1 = fibo2;
  fibo2=fibo;
}

if (fibo2 = 0) {

}