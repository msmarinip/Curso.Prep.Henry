# Homework: Javascript IV

## Objetos, propiedades y métodos.


Un `Objeto` es una variable  que contiene muchos valores dentro, cada valor tiene una llave (key) que se usa para obtener el valor.
Cada par key: value es un propiedad del objeto.
Si el valor del key es una función, se llama método.

Se define el nombre del obj luego se le asigna (=) las propiedades y métodos que va a tener, todos ellos deben estar contenidos dentro de llaves.

Ejemplo
```javascript
const libro = {
  nombre: 'El libro de arena',
  editorial: 'EMECÉ',
  autor: ['JBL', false],
  cantDisponible: 10,
  strDatos: function(){
      var disponible;
      if(this.cantDisponible>0){
          disponible = 'está disponible';
      } else {
          disponible = 'no está disponible';
      }

      console.log(`El libro '${this.nombre}' escrito por ${this.autor[0]} ${disponible}.`)
  }
}
```

para acceder al método basta referenciar al objeto.método
si sólo quiero el contenido no necesito agregar los paréntesis, en cambio si lo que quiero es ejecutar la fción sí.
```javascript
libro.strDatos(); //escribe en la consola: El libro 'El libro de arena' escrito por JBL está disponible.
```
Entonces el objeto libro tiene las propiedades nombre (es un string), editorial (es un string), autor (es un array), cantDisponible (es un number) y el método strDatos.

Si en el método necesito valores que están en las propiedades del obj las obtengo con this. 'this' es el objeto 'dueño' del método, es donde el método está definido.


## Notación de puntos vs notación de corchetes

Hay dos maneras de acceder a los valores de las propiedades o métodos de los objetos:

`Notación de punto` => objeto.propiedad = valor
    
    libro.nombre => devuelve 'El libro de arena'

Si quisiera cambiarle el valor basta con asignarle uno nuevo


```javascript
        libro.nombre = 'El informe de Brodie'; // ahora modifiqué el nombre del libro
``` 
La ventaja de la notación de punto es que es más fácil de escribir,  pero tengo que conocer el nombre de la propiedad, no puedo enviarla como una variable. Si no tuviera el nombre (key) de la propiedad puedo usar la notación de corchetes que tiene una sintáxis poco práctica
pero puedo poner variables.


`Notación de corchetes` => objeto['propiedad']
```javascript
        
        var datosAutor  = libro['autor']; // datosAutor =  ['JBL', false]
        var nombreAutor = libro['autor'][0]; //nombreAutor = 'JBL'
```        
Si quisiera cambiarle el valor basta con asignarle uno nuevo
```javascript
        

        keyAutor ='autor';  //en la notación de corchetes puedo tener los nombres de las props o métodos guardados en una variable

        libro[keyAutor][0] = 'Jorge Luis Borges'; // ahora modifiqué el nombre del autor

```
De la misma manera puedo invocar un método

```javascript
    libro['strDatos'](); // escribe en consola: El libro 'El informe de Brodie' escrito por Jorge Luis Borges está disponible
```


## for..in

Es un statment para recorrer las propiedades del objeto
```javascript
for(prop in libro){
    console.log( prop + ': '+ libro[prop])
}
```