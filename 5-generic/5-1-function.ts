{
  // item이 null인지 아닌지 확인하는 함수
  // 이렇게 하면 타입별로 다 만들어줘야 한다.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullBad(12);
  console.log(result);
  checkNotNullBad(null);

  // 자바스크립트 쿼리셀렉터에서 요소가 리턴될수도, null이 리턴될 수도

  // 타입이 any이게
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  // any일 때 문제는 타입이 보장이 되지 않는다. => 안전하지 않음
  const result2 = checkNotNullAnyBad(123);

  // 인자를 제네릭 => 통상적인, 일반적인 다 포용하는 느낌
  // T 라고 줬음 => 함수를 보자마자 제네릭 함수라고 알게된다
  // 사용자가 숫자를 넣으면 숫자를 리턴 받고, boolean을 넣으면 boolean을 리턴받는 제네릭 타입을 가진 함수라고 생각할 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 숫자를 전달했기 때문에 checkNotNull을 숫자를 리턴한다고 결정이 되어있다.
  const number: number = checkNotNull(123);
  // true를 전달했기 때문에 boal은 true 타입이 된다. => boal에 boolean으로 타입을 붙혀주면 boolean으로 변경된다 여기서 만약, string을 붙혀주게 되면 에러, true라고 줬기 때문에 boolean이지, string으로 바뀌는 건 불가능
  const boal: boolean = checkNotNull(true);
}
