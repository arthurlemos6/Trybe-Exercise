// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let message in names) {
//       console.log("Olá", names[message], ",Tudo bem?");
//   }

// Para fixar:

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car){
//     console.log(index, ",", car[index]);
//   }

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  for(let message in info) {
    console.log("Boas vindas, " + info.personagem);
  }