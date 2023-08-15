{
  //   // JavaScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

    // TypeScript
    function add(num1: number, num2: number): number {
      return num1 + num2;
    }

    // 무언가를 fetch를 해서 어떤 코드가 발생하다가 프로미스를 리턴하는 함수
    // 리턴값은 Promise이고, 프로미스 중에서도 number를 리턴하니까
    // : Promise<number> 라고 적어준다.
    // 프로미스는 fetch가 완료된 다음에 숫자의 데이터를 리턴하는구나 라고 생각하면 된다.
    function jsFetchNum(id: string): Promise<number> {
      // code ...
      // code ...
      return new Promise((resolve, reject) => {
        resolve(100);
      });
    }

  // JavaScript => TypeScript
  // Optional prameter > ?를 작성하면 된다. 
  function printName(firstName: string, lastName?: string | number) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("suehee");
  printName("tell", 3);
  printName("Anna", undefined);
  // 전달해도 전달하지 않아도 되는 > optional parameter

  // Default parameter > 아무것도 전달하지 않아도, 자동적인 메세지가 들어간다. (기본 메세지);
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); // default message

  // Rest parameter
  //   console.log(addNumbers(1, 2));
  //   console.log(addNumbers(1, 2, 3, 4));
  //   console.log(addNumbers(1, 2, 3, 4, 5, 0));

  // 인자 개수에 상관없이 알아서 다 더해주는 함수
  // ...numbers = rest parameter
  function addNumbers(...numbers: number[]): number {
    // a와 b를 받아서 계속해서 a와 b를 더해나간다.
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3, 4));
}
