var a = [1,2,3,4]
console.log(typeof a)

/* Crear un programa que determine si un número es par o no, la respuesta será mostrada
con console.log */

function par(num){
    if(num%2==0){
        return `es par`
    }else{
        return `es impar`
    }
}

console.log(par(7))


/* Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n se ingresa como
número en la funció */
function mostrarNum(num){
    for(let i = 1; i<=num ; i++){
        console.log(i)
    }
}


/* - Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n se ingresa como
número en la función */
function mostrarDos(num){
    for(let i = 0; i<=num ; i = i+2){
        console.log(i)
    }
}
mostrarDos(20)

function tabla9(num){
    for (let i = 1; i <= 10; i++) {
        console.log(num*i) 
    }
}
tabla9(9)


function sumaEntre(n,m){
    let suma = 0;
    if(n>m){
        for(let i = m; i<=n ; i++){
            if(i%2==0){
                suma += i;
                console.log(i)
                console.log(suma)
            }
        }
    }else{
        for(let i = n; i<=m ; i++){
            if(i%2==0){
                suma += i;
                console.log(i)
                console.log(suma)
            }
        }
    }
}

sumaEntre(10, 1)

/* - Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla. */

var matriz = [1,2,3,4,5,6];
var i = 0;

while(i < matriz.length) { 
    console.log(matriz[i])
    i++
} 
console.log(matriz.length)//largo de la matriz o array

var i = 0;
do {
    console.log(matriz[i])
    i++
} while (i < matriz.length);

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i])   
}

for (const obj in matriz) {
    console.log(matriz[obj])      
}

for (const obj of matriz) {
    console.log(obj)
}

matriz.forEach((valor,posicion,array)=>{
    console.log(valor)
    console.log(posicion)
    console.log(array)
})

var desorden = [3,4,6,1,3,9,6];
var ordenada = desorden.sort()
console.log(ordenada)
console.log(ordenada[ordenada.length-1])
console.log(ordenada[0])

function ordenarMatriz(array){
    let ordenada = array.sort();
    let mayor = ordenada[ordenada.length-1];
    let menor = ordenada[0]
    return menor;
}

console.log(ordenarMatriz(desorden))