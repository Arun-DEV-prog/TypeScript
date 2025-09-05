function greet(person) {
    console.log("welcome ".concat(person.name, " . Your age ").concat(person.age));
}
greet({ name: 'arun', age: 23 });
var myNuM = 'arun';
console.log(myNuM);
var student1 = {
    name: "kamal",
    age: 23,
    fn: (function (country) { return "welcom my name is ".concat(student1.name, " , i am ").concat(student1.age, " & I am from").concat(country); })
};
var indroduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "welcom my name is ".concat(name, " , i am ").concat(age);
};
console.log(student1.fn("india"));
console.log(indroduction(student1));
