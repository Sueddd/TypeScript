{
  /**
   * Type Assertions
   */

  // 불가피 하게 써야 하는 경우가 있따.
  //
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // 원래라면 result가 any타입이기 때문에 length를 쓰지 못하는데
  // type assertion 의 as를 이용해서 result를 string으로 간주하고 사용해줄수있음
  // result는 문자열에서 사용가능한 api들을 사용할 수 있음
  console.log((result as string).length);

  const wrong: any = 5;
  // wrong은 숫자를 갖고 있는 배열이라고 간주
  console.log((wrong as Array<number>).push(1)); // 에러나옴

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2);
  // numbers는 숫자 배열이거나 undefined이기 때문에 push를 쓰는 건 좋지 않다고 에러 나옴 >  느낌표를 붙여준다면 장담한다는 뜻 > 에러 안나옴

  const button = document.querySelector('class');

}
