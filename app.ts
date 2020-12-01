enum Area {MUSIC, ART, DRAMA};
const person:{
  name: string;
  age: number;
  hobbies: string [];
  role: [string, number];
  area: any;
  
} =
{
  name: 'Malakai',
  age: 3,
  hobbies:['Telly', 'running'],
  role:['author', 2],
  area: Area.MUSIC
}

console.log(person.name)

for (const hobby of person.hobbies){
  console.log(hobby.toLocaleUpperCase())
}
console.log(person.area)