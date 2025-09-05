type PersonInfo= readonly [string,number,boolean]


const person1:PersonInfo=['vinode',22,true];
const person2:PersonInfo=['azim',23,false];

const displayPersonInfo=(person:PersonInfo)=>{
 const [name,age,hasLicencse]=person;

 console.log(name,age,hasLicencse);
}


displayPersonInfo(person1)
displayPersonInfo(person2)