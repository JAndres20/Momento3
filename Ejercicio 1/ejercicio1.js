'use strict'

//Ingresar un nombre con promp y verificar si el ombre ingresado se enceuntra en el vector

let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let nombre = prompt("Ingrese un nombre");

if ( students.includes(nombre)){
    alert("Si se encuentra");
} else{
    alert("No se encuentra")
}
/*let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
Esta línea de código declara una variable llamada students y le asigna un array que contiene cinco nombres. En JavaScript, los corchetes [] se utilizan para definir arrays, que son una estructura de datos que puede contener múltiples valores.

let nombre = prompt("Ingrese un nombre");
Esta línea de código declara una variable llamada nombre y le asigna el valor ingresado por el usuario a través de la función prompt(). La función prompt() muestra un cuadro de diálogo con un mensaje solicitando al usuario que ingrese un valor.

if ( students.includes(nombre)){
Esta línea de código verifica si el valor de la variable nombre está incluido en el array students utilizando el método includes(). Si el valor de nombre se encuentra en el array students, el código dentro del bloque if se ejecutará.

alert("Si se encuentra");
Esta línea de código muestra un cuadro de diálogo con el mensaje "Si se encuentra" si el valor de nombre se encuentra en el array students.

} else{
Esta línea de código define un bloque else, que se ejecutará si la condición del bloque if no se cumple. En este caso, el bloque else se ejecutará si el valor de nombre NO se encuentra en el array students.

alert("No se encuentra")
Esta línea de código muestra un cuadro de diálogo con el mensaje "No se encuentra" si el valor de nombre NO se encuentra en el array students.

}
Esta llave cierra el bloque if-else. Todo el código que está dentro de los bloques if y else se ejecutará dependiendo de si la condición del bloque if se cumple o no.*/