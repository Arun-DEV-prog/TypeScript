type Point ={
     x:number;
     y:number;
};

function printCood (pt:Point){
     console.log("the cordinate's x value is " + pt.x);
     console.log("the cordinate's y value is " + pt.y);
}

printCood({x:100,y:100});


type id =number | string

const fun=(ID:id)=>{
     console.log(ID);
}
fun(30);


type UserInput=string;

function sanitizeInput(str:string):UserInput{
     return sanitizeInput(str);
}


function compare (a:string , b:string):-1 | 0 | 1{
     return a===b ?0 : a>b ? 1 : -1;
}

console.log(compare('arun','arun'));


const req = { url :"https://example.com",method:"GET"} as const;


function padLeft(padding: number | string, input: string): string{
   if(typeof padding === 'number'){
     return " " .repeat(padding) + input;
   }
   return padding + input;
}

console.log(padLeft('abul','arun'));


function printAll(strs: string | string [] | null){
     if(strs && typeof strs == "object"){
         for( const s of strs){
             console.log(s)
         }
     }else if(typeof strs === 'string'){
        console.log(strs);
     }
}

printAll([]);