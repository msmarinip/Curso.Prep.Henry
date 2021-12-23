# Homework: Javascript V

## Constructores

Un contructor es como la maqueta sobre la que se van a crear los objetos. Ahí se definen las propiedades que van a tener los objetos que se construyan a partir de ese constructor (clase).

El constructor se define igual que una función y, por convención, lleva la primer letra en mayúscula.
La diferencia con las funciones es que el constructor no de vuelve nada, sólo define propiedades y métodos que van a tener los objetos.

Ejemplo
```javascript

    function Vegetal(angiosperma, nombre){
        this.angiosperma = angiosperma || true;
        this.nombre = nombre || 'sin nombre'
        this.titulo = function(){
            return `Planta ${this.nombre}`;
        }
    }
```
Cuando creo un objeto literal, el `this` hace referencia al mismo objeto. En el caso de un constructor el `this` va a hacer referencia
al objeto que se cree a partir de ese constructor.

Ejemplo
```javascript
    var limonero = new Vegetal(true, 'Limonero');
    var pino = new Vegetal(false, 'Pino')
```

Se crearon los objetos limonero y pino que tienen todas las propiedades y todos los métodos de Vegetal, cuando yo quiera saber, por ejemplo, el título de limonero, `this`  va a ser el obj limonero.

## Prototype

Una clase (contructor) hereda todas las propiedades y métodos de un proptotypo.
Si yo, fuera de la clase quisiera agregar algún otro método y propiedad, como hacía con los objetos literales, no se puede. Tengo que recurrir al prototype y agregarselo ahí.

Ejemplo
```javascript
    Vegetal.prototype.esAngiosperma = function(){
        if(this.angiosperma){
            return `${this.nombre} es una planta angiosperma.` 
        } else {
            return `${this.nombre} es una planta gimnosperma.`
        }
    }


    console.log(limonero.esAngiosperma())  // Limonero es una planta angiosperma.
    //this es el obj limonero
```
