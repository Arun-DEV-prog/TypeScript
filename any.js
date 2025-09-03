var myName = "Arun Roy";
myName.replace('a', 'a');
console.log(myName);
function greeting(num) {
    return Promise.resolve(num + 24);
}
greeting(2).then(function (result) { return console.log(result); });
var names = ["Alice", "Bob", "EVA"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toLowerCase());
});
//Object Types
function printCood(pt) {
    console.log(pt.x + pt.y);
}
printCood({ x: 2, y: 4 });
//oprional Properties
function printName(obj) {
    var _a, _b;
    // console.log(obj.first +" "+ obj.last)
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    if (obj.last !== undefined) {
        // ok
        console.log((_b = obj.last) === null || _b === void 0 ? void 0 : _b.toUpperCase());
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
//Working with Union Types
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('arun');
