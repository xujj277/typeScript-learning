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
