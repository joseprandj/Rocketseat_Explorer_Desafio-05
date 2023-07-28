let numberOne = Number(prompt('Digite o primeiro número'));
let numberTwo = Number(prompt('Digite o segundo número'));

const calculator = (num1, num2) => 
  alert(`A soma dos dois números: ${(num1 + num2).toFixed(2)}
A subtração dos dois números: ${(num1 - num2).toFixed(2)}
A multiplicação dos dois números: ${(num1 * num2).toFixed(2)}
A divisão dos dois números: ${(num1 / num2).toFixed(2)}
O resto da divisão dos dois números: ${(num1 % num2).toFixed(2)}`);
calculator(numberOne, numberTwo);

const evenOdd = (numberOne + numberTwo) % 2;
const equals = numberOne === numberTwo;

let evenOddMessage = '';
let equalsMessage = '';

if(evenOdd === 0){
  evenOddMessage = 'A soma dos dos número é par';
} else{
  evenOddMessage = 'A soma dos dos número é impar';
};

if(equals){
  equalsMessage = 'Os números digitados são iguais';
} else{
  equalsMessage = 'Os números digitados são diferentes';
};

alert(`Curiosidades:
- ${evenOddMessage}.
- ${equalsMessage}.
`)