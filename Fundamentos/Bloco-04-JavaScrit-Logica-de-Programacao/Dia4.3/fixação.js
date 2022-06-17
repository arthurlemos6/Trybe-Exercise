let fruits = [3, 4, 10, 1, 12];
let numero = 0;

for (let index = 0; index < fruits.length; index +=1) {
    numero += fruits[index];
}

if (numero > 15) {
    console.log(numero);
} else {
    console.log("Numero Invalido");
}
