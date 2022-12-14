//creación de matriz
let matriz = [1,2,3,4,5,6]; // con datos
 //posiciones[0,1,2,3,4,5]
 // las matrices pueden absorber cualquier dato
let matrizStr = ['Frederick','Cid','lol'];
let matrizMezclada = ['Frederick','Cid',27,1995,true,false]
let matriz2 = [];//sin datos
console.log(matriz[0]) //se selección con indice
console.log(matriz2[0])// si no tiene datos queda como undefine

// editar matriz
matriz[2] = 10;
console.log(matriz)

//agregar datos
matriz.push('dato agregado');
console.log(matriz)
//borrar el ultimo dato
matriz.pop();
console.log(matriz);
//indexOf busca la posición del elemento a buscar
console.log(matriz.indexOf(10));
//largo de una matriz length(muestra el largo de una matriz)
console.log(matriz.length);
//recorre de manera rápida un array
matriz.forEach(i => {
    console.log(i);
});
//concadenar dos matrices
matriz.push(10,10,10);
console.log(matriz.concat(matrizMezclada));
matriz.map
console.log(matriz);
//sort() ordena  los elementos
console.log(matriz.sort())
//slice corta la matriz de la posición inicial a la posición final dada
console.log(matriz.slice(0,3))
//splice reemplaza un numero según el indice
console.log(matriz.splice(1,1,5))// con 1 o > reemplaza los números siguiente por el numero dado borrado los de la derecha y con 0 agrega
console.log(matriz.splice(1,0,33))
console.log(matriz)
//ultimo dato de la matriz
console.log(matriz[matriz.length-1])
console.log(matriz)
//agregar al inicio unshift
matriz.unshift('primer agregado');
console.log(matriz);
//shift elimina el primer elemento
matriz.shift()
console.log(matriz)
//forEach
matriz.forEach((elemento,index,array)=>{
    console.log(elemento);
    console.log(index);
    console.log(array)
})