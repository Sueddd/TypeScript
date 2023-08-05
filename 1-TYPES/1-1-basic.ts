{
  // JavaScript
  // let es6에 let은 도입
  //   let name = "hello";
  //   name = "hi";

  //   // const
  //   const age = 5; // const는 재할당이 되지 않았음
  /**
   * JavaScript
   * Primitive(원시) : number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   *  */

  // number
  const num: number = -1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true; // true or false만 할당 가능

  // undefined > 값이 비었는지 아닌지 결정되지 않은
  //   let name : undefined; // undefined만 선언된 변수는 거의 없음
  let age: number | undefined;
  age = undefined;
  age = 1;

  // 찾았다면 number return, 못찾았다면 undefined return 하는 함수
  function find(): number | undefined {
    return undefined;
  }

  // null > 값이 비었다.
  let person: null;
  let person2: string | null;

  // unknown > 알 수 없는 > 가능하면 쓰지 않는 것을 추천
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any > 가능하면 쓰지 않는 것을 추천
  let anything: any = 0;
  anything = "hello";

  // void > 아무것도 리턴하지 않으면 void
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // 변수에서는 거의 쓰지 않는다.

  // never > 리턴을 안함
  function throwError(message: string): never {
    // throwError > 어플에서 에상치 못한, 핸들링할 수 없는 에러가 발생했을 때 호출하는 함수
    // message -> server(log)
    // 발생한 에러 메세지를 서버로 보내서 로그를 남기고
    // 어플리케이션에서 에러를 던질 수 잇다?
    throw new Error(message);
    // 즉, 이 함수를 호출하면 리턴할 수가 없는 것
    // 에러를 던지거나 리턴되지 않는 경우 :
    // 위에서 에러를 던지면 while문을 돌지 못하기 때문에 희미하게 보임
    while (true) {}
  }

  // object > 모든 object 타입을 할당할 수 있다.
  let obj: object = [1, 3]; // 쓰지 않는 것이 좋다
  function acceptSomeObejct(obj: object) {}
  acceptSomeObejct({ name: "ellie" });
  acceptSomeObejct({ animal: "dog" });
}

