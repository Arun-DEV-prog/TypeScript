function identity<Type>(arg:Type[]) : Type[]{
    console.log(arg.length);
 return arg;
}

let output=identity <string>(['arun','jamal']);

console.log(output);


function add<T,U>(a:T,b:U){
  console.log(typeof a);
  console.log(typeof b);
}

const result1 =add<number,string>(10, "abul");
const result2 =add('abul', "kabul");


