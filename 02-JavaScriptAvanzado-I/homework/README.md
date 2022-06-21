|
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);//
console.log(x);//

//la x sin var tiene un alcance global 
```

```javascript
console.log(bar);//undefined
console.log(baz);//undefined
foo();//Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Reverse Flash
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2 *convierte la sting a num*
"2" * "3" // 6 *convierte las stings en num*
4 + 5 + "px" // los num se suman y despues se convierten en strings y se suma a la sting "px" resultado:"9px"
"$" + 4 + 5 // al ser el primer valor una string convierte los otros a lo mismo entonces el resultado es "$45"
"4" - 2 // al ser resta como no se puede realizar esa operacion entre string cambia el "4" a numero y hace la resta
"4px" - 2 // pasa lo mismo de antes pero al tener texto tira eror Nan 
7 / 0 //tira indefinido ya que no se puede dividir 7 entre 0
{}[0] //devuelve la posicion "[0]"
parseInt("09")// tira 9 ya que al no ponerle base al parseInt lo toma como un numero entero decimal
5 && 2 // 2
2 && 5 // se queda con la ultima sentencia de y
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] //33
3>2>1 //false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();//undefined // 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//"meo2 mix"
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//"Aurelio De Rosa"

var test = obj.prop.getFullname;

console.log(test());//Juean Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();//1 4 3 2 
```
