function printCood(pt) {
    console.log("the cordinate's x value is " + pt.x);
    console.log("the cordinate's y value is " + pt.y);
}
printCood({ x: 100, y: 100 });
var fun = function (ID) {
    console.log(ID);
};
fun(30);
function sanitizeInput(str) {
    return sanitizeInput(str);
}
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('arun', 'arun'));
var req = { url: "https://example.com", method: "GET" };
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft('abul', 'arun'));
