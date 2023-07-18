// union type > 두가지 타입이 올 수 있음
let 회원: number | string = 123;

// 할당을 해주면 그 타입으로 확정이 되고, 수정은 가능하다.
회원 = "회원";

// 괄호를 묶어야 배열에 number과 string 모두 들어갈 수 잇음 .
let 회원들: (number | string)[] = [1, "2", 3];

let object: { a: string | number } = { a: 123 };

// any 타입
// 모든 자료형 허용해줌 => 타입실드 해제문법임
// unknown 타입도 any와 비슷한 역할 그러나 any보다 안전
let 이름: any;
이름 = 123;
이름 = [];

let 나이: string | number;

// 타입지정 과제
let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string | boolean | undefined)[] = [user, age, undefined];

// 타입지정 과제
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
