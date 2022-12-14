var i = 0;
while( i <= 10 ) {
    console.log( i );
    i = i + 1;
}

for (let i = 0; i <= 10; i++) {
    console.log(i);  
}

var matriz = [1,2,3,4,5,6,7,8,9,10]
//   posicion[0,1,2,3,4,5,6,7,8,9] 
matriz.forEach((v,i,a)=>{
    console.log(v)
    console.log(i)
    console.log(a)
})

masUno = [];
matriz.forEach((i)=>{
    masUno.push( i + 1 )
    console.log(i)
});
console.log(masUno);

masDos = [];
matriz.forEach(i=>masDos.push(i+2));
console.log(masDos)

var j = 0
do {
    console.log(j)
    j++
} while (j<=10);

for (const i in matriz)  {
    console.log(i)
    console.log(matriz[i])
}

for (const i of matriz) {
    console.log(i)
}

function primoFor(num) {
    let c = 0;
    if (num < 1) {
    return false;
    } else {
    for (let i = 0; i <= num; i++) {
        console.log(i)
        if (num % i == 0) {
            c++;
            console.log(i);
        } /* else if (i == 23) {
            console.log(i);
            break;
        } */
    }
    if (c == 2) {
        return `es primo`;
    } else {
        return `no es primo`;
    }
    }
}
console.log(primoFor(3)); // 59%1 = 0 c++ ; 59%59 = 0 c++ c=2

//funcion
function primo(x){
    if(x<1){
        return false;
    }else{
        for (let i = 2 ; i < x; i++){
            if ( x % i == 0){
                return false;
            }
        }
        return true;
    }
}

for(let i = 0; i <=23; i++){
    if(primo(i)){
        console.log(`${i}, es primo`);
    }else{
        console.log(`${i}, no es primo`); 
    }
}

var contPrimo = 0;

while(true){
    if(primo(contPrimo)){
        console.log(`${contPrimo}, es primo`);
    }else{
        console.log(`${contPrimo}, no es primo`);
    }
    if(contPrimo == 23){
        break;
    }
    contPrimo++
}
matriz
console.log(matriz[matriz.length-1])
console.log(matriz.length)
for (const i of matriz) {
    console.log(i)
}


var num1 = 10;
for(let i = 0; i<=num1; i++){// i = i+1
    console.log(i)
}
