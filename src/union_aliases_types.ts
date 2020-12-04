type Combinable = number | string;
type ConversionDescriptior = 'as-number' | 'as-text'
function combine(n1: Combinable, n2: Combinable , resultConverstion:ConversionDescriptior){
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConverstion === 'as-number'){
    result = +n1 + +n2;}
    else {
    result = n1.toString() + n2.toString();
  }
  return result
}

const combinedAges = combine(10, 3, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('10', '3', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Sophia', 'Malakai', 'as-text');
console.log(combinedNames);
