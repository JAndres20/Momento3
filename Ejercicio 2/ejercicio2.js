'use strict'

// Separar las palabras y mostrar cuantas palabras tiene la siguiente frase

let phrase = 'La programacion web es fundamental para el proceso'
let words = phrase.split(' ');
let wordCount = words.length;

alert (' La frase tiene ' + wordCount + ' palabras')

/*let phrase = 'La programacion web es fundamental para el proceso'; Esta línea declara una variable de cadena denominada phrasecon el valor "La programación web es fundamental para el proceso" (que significa "La programación web es fundamental para el proceso" en inglés).
let words = phrase.split(' '); Esta línea utiliza el split()método para dividir la phrasecadena en una matriz de palabras según el carácter de espacio.
let wordCount = words.length; Esta línea declara una variable nombrada wordCounty wordsle asigna la longitud de la matriz, que representa el número de palabras en la phrasecadena.
alert (' La frase tiene ' + wordCount + ' palabras') Esta línea muestra un cuadro de diálogo de alerta con el mensaje "La frase tiene [word count] palabras" en inglés), donde [word count]está el valor de la wordCountvariable.*/