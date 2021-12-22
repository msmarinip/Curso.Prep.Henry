# Homework: Javascript III

## Arrays
---

Un array (arreglo) es una variable especial, lleva una lista de valores ordenados por un índice.
Es como un check list, como cualquier otra variable la podés definir como var, const o let.
Ej 
```javascript
    const miCheckList = []; // este sería un array vacío.
```
Los ítems de la lista van separados por coma y los puedo agregar a mano (`arreglo literal`)
```javascript
    miCheckList = ['Hacer las valijas', 'Cargar el celular', 'No olvidar el cargador', 0, null, function(){}]; // puedo ingresar cualquier tipo de valor.
```
    índice:                0                   1                   2

Cada ítem de la lista tiene asignado un índice, que es la posición del item en la lista. El índice empieza desde cero.

miCheckList es un array que tiene 3 elementos el 0, el 1 y el 2.

Los arrays tienen `propiedades` y `métodos`
una de las propiedades interesantes es el length

miCheckList.length => me devuelve la cantidad de elementos que tiene el array, como es una propiedad no necesito poner los () para obtener el dato como haría cuando quiero obtener el resultado de una fción.

Si quisiera saber que escribí en la posición 1 alcanza con hacer miCheckList[1] y menejarme con su valor como lo haría con cualquier otra variable.

Algunos de los métodos son
.push('hola') => agrega un elemento al final del arreglo y retorna el nuevo length del array.
.pop() => elimina el último elemento del array y retorna el valor del elemento eliminado.
.shift() => elimina el primer elemento del array y retorna el valor del elemento eliminado.
.unshift() => agrega un elemento al inicio del arreglo y retorna el nuevo length del array.
.toString() => pasa todos los valores del array a un string los valores quedan separados por coma (,).
.join() => funciona como el toString pero se puede indicar cuál es el separador
```javascript
    miCheckList.join('---');
```
