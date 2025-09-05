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


enum Roles{
    user="User",
    admin="admin"
}

type loginDetails={
    name?: string,
    email:string,
    password:string,
    role:Roles,
}

const user1: loginDetails={
    name:'about',
    email:'abc@gmail.com',
    password:'3333',
    role:Roles.user
}
const user2: loginDetails={
    name:'abulr',
    email:'addd@gmail.com',
    password:'3333',
    role:Roles.admin
}

const isAdmin=(user:loginDetails)=>{
    const {name,email,role}=user;
  return  role==='admin' ? `${user.email} is edit this website`: `${user.email} is not edit this website`


}

console.log(isAdmin(user1))
console.log(isAdmin(user2))