function maid(uwu) {
    console.log(uwu);
}

maid('jeje');

function saludoString(hola) {
    return `Hola como estas?, ${hola}`; //template String
}
console.log(saludoString('Frederick'));

//Operadores lógicos
//<,>,<=,>=,||(or),&&(and),!=(distinto),==,===,!
//Operadores aritméticos
//+,-,*,/,%
console.log(2 / 6);
console.log(12 === "12");

var obj1 = [1, 2, 3];
var obj2 = [1, 2, 3];

console.log(obj1 === obj2);

for (let i = 0; i < 3; i++) {
    console.log(obj1[i] == obj2[i]);
}

/* Ejercicio #1: crea una función que tenga un número y comprueba 
si el número es mayor que 10. Imprime en la consola verdadero si es 
mayor y de lo contrario falso.  */
function mayor(num) {
    //condicional de si numero es mayor a 10
    /* if (num > 10) {
        return `el numero es mayor a 10`;
        si es falso se cumple la condición falsa
    } else {
        return `el numero ees menor a 10`;
    } */
    return (num > 10) ? `el numero es mayor a 10` : `el numero es menor a 10`;
}
console.log(mayor(10));

/*  Ejercicio #2: Crea una función
que tome un número y comprueba si 
es divisible entre 4 o divisible 
entre 9. Imprime en la consola verdadero si un número es
divisible entre 4 o 9, y falso si un número no es divisible entre ninguno de los dos números. */

function divisible(num) {
    if (num % 4 == 0) {
        return `el numero ${num} es divisible por 4`;
    } else if (num % 9 == 0) {
        return `el numero ${num} es divisible por 9`;
    } else {
        return `el numero no es divisible ni por 9 ni por 4`;
    }
}
console.log(divisible(1));


/* una función donde yo ingrese el nombre, fecha de nacimiento, 
saludo a la persona, cuantos años tiene y si es mayor de edad */

function saludo(nombre, anio) {
    var date = new Date();
    edad = date.getFullYear() - anio; // date.getFullYear() retorna año actual 
    /* if (edad > 18) {
        return `Hola ${nombre}, tu edad es ${edad} y eres mayor de edad`;
    } else {
        return `Hola ${nombre}, tu edad es ${edad} y eres menor de edad`;
    } */
    // if else version ? como funciona  condición ? verdadero : falso
    return (edad > 18) ? `Hola ${nombre}, tu edad es ${edad} y eres mayor de edad` : `Hola ${nombre}, tu edad es ${edad} y eres menor de edad`;
}

console.log(saludo("Frederick", 1995));


/* Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) 
y a través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo 
grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es 
para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por 
pantalla el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor 
o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje 
“El grosor para esta rueda es inferior al recomendado”
j
Ejecuta el código y comprueba sus resultados. Para comprobar si es correcta tu solución puedes 
consultar en los foros aprenderaprogramar.com. */

function rueda(d, g) {
    if ((d > 1.4 && g < 0.4) || ((d <= 1.4 && d > 0.8) && g < 0.25)) {
        return "El grosor para esta rueda es inferior al recomendado";
    } else if ((d <= 1.4 && d > 0.8)) {
        return "La rueda es para un vehículo mediano";
    } else if (d > 1.4) {
        return 'La rueda es para un vehículo grande';
    } else {
        return "La rueda es para un vehículo pequeño";
    }
}
console.log(rueda(0.2, 0.5));


//recorrer cadena con For
let cad = 'Fredrick Cid';
for (const letra in cad) {
    console.log(cad[letra]);
}

//largo de la cadena
console.log(cad.length);
//ultima letra
console.log(cad.charAt(cad.length - 1));

let numeros = 123567;
console.log(numeros.toString());

//concadenar
let nombre = 'Frederick';
let apellido = "Cid";

console.log(nombre.concat(" ", apellido)); // se puede agregar mas de un parámetro dentro del paréntesis


let numerosString = "123456";
console.log(parseInt(numerosString));
//transformar una letra a mayúscula
console.log(nombre.charAt(0).toUpperCase());
//transformar una letra a mayúscula minúscula
console.log(nombre.charAt(3).toLowerCase());
//Corta cadena  y concadenar con primera letra mayúscula
console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1, ));
console.log(nombre.charAt(0).toUpperCase().concat(nombre.slice(1, )));