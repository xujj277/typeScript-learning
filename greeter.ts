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

let notSure: any = 4
notSure = 'ss'
notSure = false
// notSure.toFixed()

let demoObj: Object = 4
console.log(demoObj)
// demoObj.toFixed()


let list: any[] = [1, 'asdfg', false]
console.log(list[1])
list[1] = 100
console.log(list[1])

// void
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;

// never
// 当一个函数没有返回值时，它返回了一个 void 类型，但是，当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 never，void 指可以被赋值的类型（在 strictNullChecking 为 false 时），但是 never 不能赋值给其他任何类型，除了 never
function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  // 如果不是一个 never 类型，这会报错：
  // - 不是所有条件都有返回值 （严格模式下）
  // - 或者检查到无法访问的代码
  // 但是由于 TypeScript 理解 `fail` 函数返回为 `never` 类型
  // 它可以让你调用它，因为你可能会在运行时用它来做安全或者详细的检查。
  return fail('Unexhaustive');
}

function fail(message: string): never {
  throw new Error(message);
}

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 类型断言
let valued: any = "xxx"
let valuedLength : number = (<string>valued).length
let valueLength : number = (valued as string).length


try {
  throw "oh no!";
}
catch (e) {
  console.log("Oh well.");
}

function myFunction(){
  try{
    var x=document.getElementById("demo").value;
    if(x=="")    throw "值为空";
    if(isNaN(x)) throw "不是数字";
    if(x>10)     throw "太大";
    if(x<5)      throw "太小";
  }
  catch(err){
    var y=document.getElementById("mess");
    y.innerHTML="错误：" + err + "。";
  }
}


// 对象的解构赋值
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a: newName1, b: newName2 } = o;
// let newName1 = o.a;
// let newName2 = o.b;
