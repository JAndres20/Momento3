'use strict'

// De la siguiente lista de 50 libros de la biblioteca buscar si existe un titulo ingresado
//por prompt.

const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Constructi",
    "Design Patterns: Elements of Reusable Object-Oriented Soft",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
   "Ejercicios Array methods 2",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Struct",
    "Domain-Driven Design: Tackling Complexity in the Heart of ",
    "Continuous Delivery: Reliable Software Releases through Bu",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualizatio",
    "Site Reliability Engineering: How Google Runs Production S",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Softwar",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
   ];

   let nombre = prompt("Ingrese el nombre del libro");

if ( programmingBooks.includes(nombre)){
    alert("Si se encuentra");
} else{
    alert("No se encuentra")
}
/*const: Esta palabra clave se utiliza para declarar una constante, lo que significa que el valor de la variable no puede cambiar después de la declaración. En el ejemplo, programmingBooks es una constante que contiene una lista de títulos de libros.

[]: Estos corchetes se utilizan para crear un nuevo array en JavaScript. En el ejemplo, programmingBooks es un array que contiene títulos de libros.

"...": Estas comillas dobles se utilizan para declarar cadenas de texto en JavaScript. En el ejemplo, cada título de libro es una cadena de texto.

let: Esta palabra clave se utiliza para declarar una variable local. En el ejemplo, nombre es una variable local que contiene el nombre del libro ingresado por el usuario a través del cuadro de diálogo.

prompt("Ingrese el nombre del libro"): Esta función muestra un cuadro de diálogo en el que el usuario puede ingresar texto. En este caso, el cuadro de diálogo solicita al usuario que ingrese el nombre del libro.

includes(): Este método se utiliza para verificar si un array contiene un elemento específico. En el ejemplo, se utiliza el método includes() para verificar si el array programmingBooks contiene el nombre del libro ingresado por el usuario.

if / else: Estas estructuras de control se utilizan para ejecutar código de manera condicional. En el ejemplo, si el array programmingBooks contiene el nombre del libro ingresado por el usuario, se muestra un cuadro de diálogo que indica "Si se encuentra". Si no, se muestra un cuadro de diálogo que indica "No se encuentra".*/