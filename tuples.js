var person1 = ['vinode', 22, true];
var person2 = ['azim', 23, false];
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasLicencse = person[2];
    console.log(name, age, hasLicencse);
};
displayPersonInfo(person1);
displayPersonInfo(person2);
