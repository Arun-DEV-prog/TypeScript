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
function printAll(strs) {
    if (strs && typeof strs == "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
}
printAll(['arun', 'samad']);
