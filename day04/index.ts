// 타입 지정 없이 변수만 만들면 any 타입을 따라간다.

// 2자리에 들어갈 타입지정
// function 함수(x: number): number {
//   return x * 2;
// }
// 함수(3);

// void : 실수로 뭔가 리턴하는 것을 사전에 막아줄 수 있다.
// 지금 void는 텅 비어있다는 뜻 .
function 함수(x: number): void {}
// 파라미터에 값을 안채워주면 오류 나옴.
함수(2);

// 파라미터가 옵션일 경우(필수가 아닌 경우)엔 파라미터 변수?:타입
function parameter(x?: number): void {}
// 파라미터에 값을 비워놔도 오류가 안뜬다.
parameter();

// object에서도 {key?: number} 가능 > 키값이 들어올 수도 있다라는 뜻
const object: { a?: number } = {};

// 물음표가 중요한 이유는
// ?연산자는 들어올수도 있다~라는 뜻이긴 한데
// '변수?: number'는 '변수:number|undefined'와 같다.
// 결국 ?는 undefined을 나타내는 ?

function ex(x: number | undefined): void {}
// void는 return할 자료가 없는 함수의 타입으로 사용가능
// 숙제 1.

function 이름(x?: string): void {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("왜입력안함?");
  }
}

// 숙제 2.
// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수

function 배열(x?: string | number) {
  return x.toString().length;
}

// 숙제 3
// 1.함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.

// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.

// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function 결혼(x: number, y: boolean, z: string): string | void {
  //   const price = x.toString();
  //   const price2 = price.slice(0, price.length - 4);
  let score: number = 0;
  score += x;

  if (y === true) {
    score += 500;
  }
  if (z === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
