const username: string | number = 'Savant';
const number: string | number = 1;

const sum = ( a: number, b: number) => {
    return a + b;
}
sum(1,3);

// class Person {
//     age: number;
//     lastName: string;

//     constructor(age: number, lastName: string) {
//         this.age = age;
//         this.lastName = lastName;
//     }
// }

class Person {

    constructor(public age: number, public lastName: string) {
        this.age = age;
        this.lastName = lastName;
    }
}

const nico = new Person(22, 'Savant');

