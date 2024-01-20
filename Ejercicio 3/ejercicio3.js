'use strict'

//En base al resultado del ejercicio anterior agrupar en un array únicamente las
//palabras que tengan mas de 3 letras.

let phrase = ' La programacion web es fundamental para el progreso';
let words = phrase.split(' ');
let filterwords = words.filter(word => word.length > 3 );

alert('Las palabras que tienen 3 letras son: ' + filterwords);
/*let phrase = ' La programacion web es fundamental para el progreso';Esta línea declara una variable nombrada phrasey le asigna un valor de cadena.
let words = phrase.split(' ');Esta línea utiliza el split()método para dividir la phrasecadena en una serie de palabras. El split()método toma un único argumento, que es el carácter o cadena que desea utilizar como delimitador. En este caso, el delimitador es un carácter de espacio.
let filterwords = words.filter(word => word.length > 3 );Esta línea utiliza el filter()método para crear una nueva matriz que contiene solo las palabras de la wordsmatriz que tienen una longitud superior a 3 caracteres. El filter()método toma un único argumento, que es una función que define los criterios de filtrado. En este caso, la función se define mediante una función de flecha, que toma un solo argumento wordy devuelve truesi la longitud de la palabra es mayor que 3, y falseen caso contrario.
alert('Las palabras que tienen 3 letras son: ' + filterwords);Esta línea utiliza el alert()método para mostrar un mensaje que incluye la filterwordsmatriz. El +operador se utiliza para concatenar la cadena y la matriz. Sin embargo, esto hará que la matriz se convierta en una cadena, que puede no ser lo que desea. Para mostrar los elementos de la matriz individualmente, puede usar un bucle para iterar sobre la filterwordsmatriz y mostrar cada elemento en una línea separada.*/