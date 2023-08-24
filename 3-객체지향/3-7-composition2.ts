{
  // 캡슐화 시켜보기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    // optional type => 작성하지 않을수도 있음
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    // makeCoffee에 shots을 넣어주면 CoffeeCup을 반환받을 수 있따.
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    // 기계 청소
    clean() {
      console.log("cleaning the machine...🫧");
    }

    // 커피 갈기
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffe beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    // 커피 데우기
    private preheat(): void {
      //   console.log("heating up...");
    }

    // 커피 추출
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... `);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots); // 커피콩 갈기
      this.preheat(); // 커피 기계 데우기
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);

      return this.extract(shots); // 커피 추출
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기 => 그냥 클래스가 아닌, MilkFrother라는 인터페이스를 구현하는 클래스
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 정말 좋은 FancyMilkSteamer > 좋은 거품 내기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 차가운 거품을 잘내는
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기 => 그냥 클래스가 아닌, SugarProvider라는 인터페이스를 구현하는 클래스
  class CandySugarMiker implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar 🍭");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      // 어딘지 모르겠지만 어딘가에서 설탕을 받아와서
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 제대로된 슈가 믹서기
  class SugarMiker implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar 🍭");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      // 어딘지 모르겠지만 어딘가에서 설탕을 받아와서
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  // Sugar
  const candySugar = new CandySugarMiker();
  const sugar = new SugarMiker();

  // 같은 클래스를 사용하는데 서로 다른 객체 사용 가능
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar
  );
}

// 상속의 치명적인 문제는 부모를 수정하면 자식에도 영향이 간다.
// 타입스크립트에서는 한가지 이상의 부모 클래스를 상속할 수 없다.
// class SweetCaffeLatteMachine extends SweetCoffeeMaker, CaffeeLatteMachine {} => 이렇게 두개 이상의 클래스를 상속 받는 게 불가능하다는 뜻
// => 이런 상속의 문제점 때문에 composition을 사용하는 게 좋음

// Faver COMPOSITION over inheritance => 상속보다 컴포지션을 선호하라
// 각각의 기능별로 클래스를 만들어둬서 필요할 때 꺼내쓰는 composition

// 상속의 레벨을 한단계로만 유지하면서 필요한 코드를 어떻게 재사용 할 수 있는지

// ➡️ 클래스들 사이에 서로 상호작용을 하는 경우에 클래스들 간의 서로 대화하는 , 의사소통이 발생하는 경우, 클래스 자신을 노출하는 것이 아니라 계약서에의거해서 서로 간의 의사소통을 해야 한다 > 디커플링의 원칙
