let myName : string="Arun Roy"
myName.replace('a','a');

console.log(myName);

function greeting(num:number): Promise<number>{
     return Promise.resolve(num+24)
}

greeting(2).then(result=>console.log(result))


const names=["Alice","Bob","EVA"];

names.forEach(function(s){
    console.log(s.toUpperCase())
})

names.forEach((s)=>{
    console.log(s.toLowerCase());
})

//Object Types

function printCood(pt:{x:number,y:number}){
    console.log(pt.x + pt.y);
}

printCood({x:2,y:4});

//oprional Properties

function printName(obj:{first:string,last?:string}){
    // console.log(obj.first +" "+ obj.last)
     console.log(obj.last?.toUpperCase());

     if(obj.last !==undefined){
        // ok
        console.log(obj.last?.toUpperCase());
     }

}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


//Working with Union Types

function printId(id:number | string)
{
    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }else{
         console.log(id);
    }
}

printId('arun')