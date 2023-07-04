// // 이 변수에는 string만 들어올 수 있다.
// let 이름: string = "kim";

// // 배열은 []로 나타내고 앞에 string은 배열에 string으로만 구성할 수 있다는 뜻
// let 배열 : string[] = ['kim','park'];

// // 객체는 {?? : string} 이렇게 나타낸다. name이란 속성에는 string만 가능하다는 뜻
// let 객체 : {name : string} = {name : "kim"}

// string 혹은 number가 들어올 수 있다.
let 이름: string | number = 123;

// string이 들어있는 배열 또는 number가 들어올 수 있다.
let 하우: string[] | number = ["kim", "hi"];

// type을 변수에 저장해두고 사용할 수도 있다.
type 내타입 = string | number;

// 함수의 파라미터에도 타입을 지정할 수 있고
// 리턴값에도 타입을 지정할 수 있다.
function 함수(x: number): number {
  return x * 2;
}

// 튜플 타입, Member라는 타입은
// 첫번째 자리에는 number,두번째 자리에는 boolean이 들어와야 한다.
type Member2 = [number, boolean];
let john2: Member2 = [123, true];

type Member = {
  // 문자로 들어오는 object 속성들이 모두 string 타입이어야 한다
  // 글자로 된 모든 object 속성의 타입은 : string
  [key: string]: string;
};

// john이라는 자료는 무조건 name : string 이라는 자료만 들어올 수 있게 된다.
let john: Member = { name: "kim", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
