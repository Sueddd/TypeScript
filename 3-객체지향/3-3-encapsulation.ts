{
  // 캡슐화 시켜보기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private => 외부에서 보이지 않음, 접근 안됌
  // protected => 나중에 상속할 때 외부에서는 접근 못하지만 클래스에서 설정한 자식 클래스는 접근이 가능하다.
  class CoffeeMaker {
    // 내부 상태를 private으로 이용해 숨겨둠
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static이라는 키워드를 붙혀서 무언가 object를 만들 수 잇는 함수를 제공하한다면
    // 누군가 이런 생성자를 이용해 생성하는 것을 금지하기 위해서 사용
    // 이런 경우에는 constructor를 private으로 만들어서 항상 static 메소드를 이용할 수 있도록 권장하는 것이 좋다.
    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    // 커피콩 추가 함수 => 외부에서 내부의 상태(coffeBeans)를 변경할 수 있도록 해줌 (public) => 따로 public이라고 주지 않아도 기본값이 public이다.
    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffe beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  maker.fillCoffeeBeans(32);
  //   maker.coffeeBeans = 3;
  //   maker.coffeeBeans = -34; // 외부에서 내부의 상태를 유효하지 않은 상태로 만들 수 있음

  class User {
    firstName: string;
    lastName: string;
    // fullName: string;

    // get을 이용한 fullName 정의, fullName에 접근할 때마다 새로운 데이터를 만들고 개선이 가능 => fullName을 호출한 시점에 firstName과 lastName을 결합할 수 있음
    // 이는 함수이지만, 접근할 때는 함수가 아니라 멤버 변수에 접근하는 것처럼 해야한다.
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  user.firstName = "Ellie";
  console.log(user.fullName); 
  // Steve Jobs => fullName에 firstName과 lastName이 한 번 할당되면 계속 이렇게 지정되기 때문에 firstName을 바꾼다고 해서 변하지 않음.






















}
