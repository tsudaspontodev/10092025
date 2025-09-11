//imprima os numeros de 1 a 5

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// const n = 5;
// let total = 0;

// for(let i = 1; i<= n; i++) {
//     total += i;
// }
// console.log(total);


// const numero = 7;
// for(let i = 1; i<= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// imprimir numero de 0 a 10 de 2 em 2

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// let i = 0;
// while(i <= 10) {
//     console.log(i);
//     i += 2;
// }

// let lista = ["arroz", "feijão", "Picanha" ];
// console.log(lista);

// let lista1 = ["Arroz", "Feijão", "Picanha" ];
// console.log(lista1[1]);

// let lista3 = ["Arroz", "Feijão", "Picanha"];
// console.log(lista3.length);

// let lista4 = ["Arroz", "Feijão", "Picanha"];
// console.log(lista4.push("Macarrão"));
// console.log(lista4);
// console.log(lista4.unshift("Farinha"));
// console.log(lista4);
// let listaApagada = lista4.splice(2,2);
// console.log(lista4)

//somar valores dentro de um array
//Criar variavel com array de 4 numeros
//criar uma variavel para guardar a soma
//criar um for para inicializar a variável, colocar a condição e o incremento
//chamar a variável soma para somar os numeros do array 
//mostrar o resultado;

let numero = [3, 6, 9, 18 ];
// let soma = 0;
// for(let i = 0; i < numero.length ; i++) {
//     soma += numero[i];
// }
// console.log(soma);

//Encontre o maior numero dentro do array
// let maiorNum = numero[0];
// for (let i = 0; i < numero.length; i++) {
//     if (numero[i] > maiorNum) {
//         maiorNum = numero[i];
//     }
// }

// console.log(maiorNum);

//contar caracteres

const frase = "Olá, me chamo Marcos Bertolini Tsuda"
console.log(frase.length);
console.log (frase[14]);
console.log(frase.indexOf('Tsuda'));
console.log(frase.slice(31.35));
console.log(frase[37]);
console.log(frase.trim());
console.log(frase.toUpperCase());
console.log (frase.toLowerCase());
console.log(frase.includes("chamo"));