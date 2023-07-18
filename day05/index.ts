// 이 함수는 왜이럴까요
// function ex2(x: number | string): void {
//   console.log(x + 3);
// }
// 함수(2);

// 위 함수는 정상적으로 동작하지 않는다.
// 왜냐? x는 number와string 타입을 갖고 잇는 union타입이라
// 어느 타입이라고 확정지을 수 없음
// 그래서 이 타입을 확정시켜주기 위해 narrow 사용

// 수정
// function 함수(x: number | string) {
//   if (typeof x === "number") {
//     return x + 1;
//   }
// }

// x는 타입이 애매해서 사전에 에러가 간다.
// function 내함수(X: number | string) {
//   return x + 1;
// }

// if와 typeof 를 이용할 수 있음 > 이게 바로 narrowing
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  } else {
    return 1;
  }
}

// x라는 변수를 집어넣기
function 내함수2(x: number | string) {
  let array: number[] = [];
  // 에러가 나온다. 왜냐? x의 타입이 유니온이라 확정되지 않았기 때문
  // array[0] = x;

  // 이렇게 narrowing 함수를 쓰면 에러가 나오지 않는다.
  if (typeof x === "number") {
    array[0] = x;
  }
}

내함수2(2123);

// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// assertion 문법 (타입 덮어쓰기)
// 타입을 잠깐 덮어씌우기
function 내함수3(x: number | string) {
  let array: number[] = [];
  // x as number > 왼쪽에 있는 x를 number로 덮어 씌워달라는 뜻
  array[0] = x as number;
}

// as 문법의 용도
// 1. Narrowing 할 때 쓴다.
// 2. 타입을 단순히 a에 b로 변경할 때 사용하진 않는다.
// ex) let 이름 : string = 'kim';
// 이름 as number;
// >> 이름의 타입이 정확하게 지정되어 있는 상태에서 as 문법으로 변경은 불가능
