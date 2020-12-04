function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result is '+ '' + num);
}

function addAndHandle(n1:number, n2: number, cb:(num: number) => void){
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 45, (result) =>{
  console.log(result);
});


printResult(add(10, 3));

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(45, 25));

