interface Person{
     name:string;
     age:number;
}


function greet(person:Person){
     console.log(`welcome ${person.name} . Your age ${person.age}`)
}

greet({name:'arun', age:23});


let myNuM:string='arun';


console.log(myNuM);


type Student={
     name:string;
     age:number;
     gender?:string;
     fn:(country:string)=>string;
}

const student1:Student={
     name :  "kamal",
     age:23,
     fn:((country):string=>`welcom my name is ${student1.name} , i am ${student1.age} & I am from${country}`)

}


const indroduction=(student1:Student):string=>{
  const {name,age}=student1;

  return `welcom my name is ${name} , i am ${age}`;
}

console.log(student1.fn("india"));
console.log(indroduction(student1));