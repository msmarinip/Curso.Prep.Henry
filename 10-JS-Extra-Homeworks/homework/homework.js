// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  // var propElem; 
  for(prop in objeto){
      // propElem = [];
      // propElem.push(prop);
      // propElem.push(objeto[prop]);

      matriz.push([prop, objeto[prop]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var arr =  string.split('');
  var objFinal={};
  // arr.map((element) => {
  //     (objFinal[element])
  //     ? objFinal[element] = objFinal[element] + 1
  //     : objFinal[element] = 1
  // })
  arr.map(function(element) {
    if (objFinal[element]){
      objFinal[element] = objFinal[element] + 1
    } else {
      objFinal[element] = 1
    }
  })

  return objFinal;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var arr = s.split('');
  var strUpper = '';
  var strLower = '';
  arr.map((element) => {
    (element === element.toUpperCase())
    ? strUpper = strUpper  + element
    : strLower = strLower + element
  })

  strFinal = strUpper + strLower;
  return strFinal;
 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  arrStr =  str.split(' ');
  var x, y, z;
  var newStr='';
  arrStr.forEach(element => {
      x = element.split('');
      y = x.reverse();
      z = y.toString();
      newStr += ' ' + z.replace(/,/g, '');
  });
  return newStr.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numInverso = numero.toString().split('').reverse().join('');
  if(numInverso === numero.toString()){
      return 'Es capicua';
  } else {
      return 'No es capicua';
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replace(/a/g, '').replace(/b/g, '').replace(/c/g, '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b) {return a.length-b.length});
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArray=[];
  for(var i = 0; i< arreglo1.length; i++){
      (arreglo2.includes(arreglo1[i]))
      && newArray.push(arreglo1[i])
  }
  return newArray;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

