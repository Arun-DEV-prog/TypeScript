function identity(arg) {
    console.log(arg.length);
    return arg;
}
var output = identity(['arun', 'jamal']);
console.log(output);
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(10, "abul");
var result2 = add('abul', "kabul");
