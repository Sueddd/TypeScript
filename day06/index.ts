// 타입을 변수에 담아서 쓸 수 있다. > type alias
type Animal = string | number | undefined;
let 동물: Animal = 123;

// 타입변수를 만들 때는 대문자로 시작하는게 국룰, 일반 변수랑 차이 주기 위해
type Animal1 = { name: string; age: number };
let 동물1: Animal1 = { name: "kim", age: 20 };

// const 변수는 절대 바꿀 수 없다.
const 출생지역 = "seoul";
// 출생지역 = 'busan'

// object 자료 수정은 막지 못한다.
const 출생지역1 = { region: "seoul" };
출생지역1.region = "busan";

// 속성을 readonly로 변경하면 수정을 절대 할 수 없다.
// 자바스크립트 파일에서 실행은 된다.
type Girlfriend = {
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "엠버",
};

type Girlfriend1 = {
  // ?는 name속성에 string 또는 undefined가 들어올 수 있다는 뜻
  name?: string;
};

// 타입키워드를 여러개 합칠 수 있다.
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;

let position: Position = { x: 10, y: 20 };

// * 같은 이름의 type 변수 재정의 불가능

// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때
// 중복된 속성이 있으면 어떻게 될가?

// type Actionx = { x: number };
// type Actiony = { x: number };
// type Action = Actionx & Actiony;
// let action: Action = { x: 10, x: 20 };

/**
* 다음 조건을 만족하는 타입을 만들어보기
1. 이 타입은 object 자료형이어야합니다.

2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
 */

type Task = { color: string; size: number; readonly position: number[] };

let task = {
  color: "안녕",
  size: 20,
  position: [1, 2, 3],
};

// task = {
//     color :"안녕",
//     size : 20,
//     position : [1]; // 여기서 오류 발생 > readonly 속성 붙혔기 때문
// }
