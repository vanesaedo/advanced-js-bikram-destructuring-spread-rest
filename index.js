//RESUELVE LOS EJERCICIOS AQUÍ

//-- Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##
//--- Destructuring arrays: 1,2,3,4.
//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let ana;

ana = empleados[1];


//2


emailLuis = empleados[0].email;


//3
let {a=5, b=3} = {a:3, b:5};


//4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };


/*
Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
*/

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;

const {maximaHoy: today, maximaManana:tomorrow} = HIGH_TEMPERATURES;


console.log(maximaHoy);
console.log(maximaManana);

//---Spread/Rest: 5 - 11

//5

function sumEveryOther(...rest) {
{
    let total = 0;
  
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
  }
}


  //add(1); // returns 1
  //add(1, 2); // returns 3
  //add(1, 2, 3, 4, 5); // returns 15

  //6

function addOnlyNums(...rest) {
     
    let total=0;
        for (let i = 0; i < rest.length; i++) {
            if (typeof rest[i] == 'number') {

    total += rest[i];
   }
    
}return total;
    
}

//7

const countTheArgs = (...rest) => rest.length;


//8

const combineTwoArrays = (x,y) => [...x, ...y];

//9

//EJERCICIO 9 -------Vero
function onlyUniques(...rest) {
  let result = []
  for (let i = 0; i < rest.length; i++) {
      if (result.includes(rest[i]) == false) {
          result.push(rest[i])
      }

  }
  return result
}

/*
function combineTwoArrays (...rest) {
  let arg=[];
    for (let i; i < rest.length; i++){
        if (arg.includes(rest[i]) == false) {rest[i])
        }
        arg+= rest[i];
    }
const onlyUniques = (iterar(...rest)) => 
 
 }

 return [...arr1,...arr2,...rest];
}
console.log(combineTwoArrays([2, 7, 3, 1], [2, 7, 4, 12], [5, 3, 8, 1]));


let misConocimientos = [
    "variables",
    "operadores",
    "estructuras de control",
    "funciones",
  ];
  let aprendido = ["rest operator", "spread operator"];
  let misConocimientosAmpliados = [
    ...misConocimientos,
    ...aprendido,
    "otra cosa más",
  ];
*/
/*
const onlyUniques = (...rest) => {
    let final = rest;
    final.spread[]
    function comparar(...final)
   
  

    let sinDup = [];

    for (let i = 0; i < rest.length; i++){
    //si esta variable es fals es que el elemento de rest no está incluido en el sinDup. Y la reiniciio en cada iteración del prirmer for.
           for (let j = 0; j < sinDupl.length; j++) {

        // Si encuentra una igualdad por el array, establecemos igualdad como true
        if (rest[i] != sinDup[j]){
          sinDup.push(rest[i]);
        }
    return sinDup;
}
    }
};

*/
//10

/* posibles soluciones

//Con for
function combineAllArrays(...args) {

  let resultado = [];

args.forEach(array => resultado = [...resultado,...array]);
  return resultado;
}

//Ejercicio 10 Bikram spred-rest - Solución de Adri

function combineAllArrays(...args) {

    let resultado = [];

    for (let i = 0; i < args.length; i++) {

       resultado = resultado.concat(args[i]);
    }
  }


  // Refactorización 10 de Alejandro

  function combineAllArrays(...args) {

    let resultado = [];
  
    for (let i = 0; i < args.length; i++) {
  
       resultado = [...resultado,...args[i]];
    }
    return resultado;
  }
  
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


//Otra

  function combineAllArrays(x,y,...z) {
    let array3 = x.concat(y);
    return arrayFinal = array3.concat(...z)
}
//Otra 
function combineAllArrays(...z) {
  let array = [];
  return arrayFinal = array.concat(...z)
}
*/
//Otra
let combineAllArrays = (...z) => [].concat(...z)




//11 
//Ejercicio 11 Bikram spred-rest

function sumAndSquare (...args){
    
    let cuadrado = args.map(item => item * item);
    
    return cuadrado.reduce((acc, item) => acc + item, 0);
}

/*

//Refactorización de Alejandro 1
function sumAndSquare (...args){
  return args
          .map(item => item * item) // cuadrados
          .reduce((acc, item) => acc + item, 0); // suma
};




//Refactorización de Alejandro 1

const sumAndSquare = (...args) => args
                                  .map(item => item * item) // cuadrados
                                  .reduce((acc, item) => acc + item, 0); // suma

                                  */