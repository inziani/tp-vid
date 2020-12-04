function add_uno(n1: number, n2: number, showResult: Boolean, phrase: string){
  const result = n1 + n2;
  if (showResult){
    console.log(phrase + '' + result );
  } else {
    return result;

  }
   
}

const number1 = 5;
const number2 = 2.8;
const printResultUno = true;
const resultPhrase = 'Result is';

add_uno(number1, number2, printResultUno, resultPhrase);

// console.log(result);
// console.log(typeof result)