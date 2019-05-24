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
// void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// never
// 当一个函数没有返回值时，它返回了一个 void 类型，但是，当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 never，void 指可以被赋值的类型（在 strictNullChecking 为 false 时），但是 never 不能赋值给其他任何类型，除了 never
function foo(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    // 如果不是一个 never 类型，这会报错：
    // - 不是所有条件都有返回值 （严格模式下）
    // - 或者检查到无法访问的代码
    // 但是由于 TypeScript 理解 `fail` 函数返回为 `never` 类型
    // 它可以让你调用它，因为你可能会在运行时用它来做安全或者详细的检查。
    return fail('Unexhaustive');
}
function fail(message) {
    throw new Error(message);
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
