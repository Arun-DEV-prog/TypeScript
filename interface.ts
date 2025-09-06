interface Greet {
     name:string;
     age:number
}

const greets:Greet={
     name:'Arun Kumar Roy',
     age:29
}


interface Product{
     name:string;
     price:number;
     quantity:number
}

const product:Product={
     name:'Laptop',
     price:10000,
     quantity:10
}


const calculatePrice=(p:Product):number=>{
      return p.quantity * p.price
}


console.log(calculatePrice(product));