var greets = {
    name: 'Arun Kumar Roy',
    age: 29
};
var product = {
    name: 'Laptop',
    price: 10000,
    quantity: 10
};
var calculatePrice = function (p) {
    return p.quantity * p.price;
};
console.log(calculatePrice(product));
