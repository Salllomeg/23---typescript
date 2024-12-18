// let a = 5;
// let b = 'Makho'
// let c = false;

// a = '5';
// b = 123;
// c = 0;

// console.log(a)

// const a = [1,2,3]

// a.push(11)
// a.push('123')

// console.log(a)

// let a:number;

// a = 5;
// a = 13;

// console.log(a)

// let b:string;

// b = 'Makho';
// b = 'Gelashvili';

// console.log(b);


// let c:number[] = [];

// c = [1,2,3]
// c.push(15);
// console.log(c)

// let a: number | string | boolean = 5;

// a = '5'
// a = 5;
// a = false

// console.log(a);

// const obj: {
//   name: string;
//   lastName: string;
//   age: number;
//   job?: string;
// }  = {
//   name: 'Makho',
//   lastName: 'Gelashvili',
//   age: 28
// }

// obj.name = 'test'

// obj.age = 123

// obj.job = 'developer'

// console.log(obj.name)

// console.log(obj.lastName)

// console.log(obj.age)

// console.log(obj.job)

// type Person = {
//   name: string;
//   lastName: string;
//   age: number;
//   job?: string;
// }
// type StringOrBooleanOrNumber =  number | string | boolean

// interface Person {
//   name: string;
//   lastName?: string;
//   age: number;
//   job?: string;
// }


// const person: Person  = {
//   name: 'Makho',
//   lastName: 'Gelashvili',
//   age: 28
// }

// const person1: Person = {
//   name: 'Makho1',
//   lastName: 'Gelashvili1',
//   age: 29
// }

// person.job = 'developer'

// delete person.lastName


// interface BaseUser {
//   name: string;
//   lastname: string;
//   idNumber: string;
//   dateOfBirth: Date;
// }

// interface Student extends BaseUser {
//   faculty: string;
//   learningStarted: Date;
// }

// interface Lecturer extends Omit<BaseUser, 'dateOfBirth'> {
//   subject: string;
//   teachingStarted: Date;
// }

// type BaseUser = {
//   name: string | number;
//   lastname: string;
//   idNumber: string;
//   dateOfBirth: Date;
// }

// type User = Omit<BaseUser, 'dateOfBirth'>

// type Student = BaseUser & {
//   faculty: string;
//   learningStarted: Date;
// }

// type Lecturer = BaseUser & {
//   subject: string;
//   teachingStarted: Date;
// }

// const student: Student = {
//   name: 'Makho',
//   lastname: 'Gelashvili',
//   idNumber: '376125367815',
//   dateOfBirth: new Date(),
//   faculty: 'test',
//   learningStarted: new Date()
// }

// console.log(student)

// let a: any = 5;

// a = '7'
// a = false
// a = []
// a = {}
// a = new Date()

const addNumbers = (number1: number, number2:number = 10): number => {
  return number1 + number2
}

const showMessage = (message: string, name: string) => {
  console.log(`Hello ${name}. This notification is for you: ${message}`)
}

showMessage('bla bla bla', 'Test')

const sum = addNumbers(10)

console.log(sum)
