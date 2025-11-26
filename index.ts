let user: string = 'john';

user = '23';

let number: number = 10;
let isTrue: boolean = true;
let arr: string[] = ['john', 'joy']
let arrr: number[] = [10, 20, 30];
let arrrr: boolean[] = [true, false, false];

let rep: number[][] = [[10], [20]];
let all: any[][] = [[10], ['ada'], [true]];

let person: [string, number] = ['ada', 30];

let people: [string, number, string][] = [
    ['ada', 20, 'beautiful'],
    ['john', 49, 'ugly'],
    ['liz', 26, 'very beatiful']
];

interface student  {
    name: string,
    age: number,
    isPassing: boolean
}

let student1: student = {
    name: 'john',
    age: 20,
    isPassing: true
}

let result: string | number = 10;

type isPassing = 'paassed' | 'failed';
let ken: isPassing = 'failed'
let ben: isPassing = 'paassed'


function firstElement<AnyType>(arr: AnyType[]) {
    return arr[0];
}

firstElement([1, 2, 3]);
firstElement(['boy', 'girl'])
firstElement([true, false, false, true])

