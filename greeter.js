var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var isLoading = false;
var a = ['1', '2'];
var x;
x = [1, 'sdf', false];
console.log(x[1].substr(1, 2));
var abc;
(function (abc) {
    abc[abc["red"] = 1] = "red";
    abc[abc["green"] = 2] = "green";
    abc[abc["black"] = 3] = "black";
})(abc || (abc = {}));
var b = abc.red;
var c = abc[2];
console.log(c);
var notSure = 4;
notSure = 'ss';
notSure = false;
// notSure.toFixed()
var demoObj = 4;
console.log(demoObj);
// demoObj.toFixed()
var list = [1, 'asdfg', false];
console.log(list[1]);
list[1] = 100;
console.log(list[1]);
