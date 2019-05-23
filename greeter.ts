class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


let isLoading: boolean = false
let a: Array<string> = ['1', '2']

let x: [number, string, boolean]
x = [1, 'sdf', false]
console.log(x[1].substr(1, 2))

enum abc {red = 1, green = 2, black = 3}
let b: abc = abc.red

let c = abc[2]
console.log(c)

