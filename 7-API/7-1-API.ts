Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: false },
  { passed: false },
];

// student가 true인지 아닌지 검사하는 콜백 전달
const result = students.every((student) => {
  return student.passed;
});

// every<S extends T>(predicate : (value : T, index : number, array: T[])=> value is S, thisArg? : any) : this is S[])

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;

// 에러는 예상할 수 있는
// 익셉션은 예상할 수 없는
