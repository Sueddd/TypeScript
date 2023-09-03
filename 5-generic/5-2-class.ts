// either : a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 왼쪽과 오른쪽이 서로 다른 타입일 수도 있고, 같은 타입일 수도 있다.
// L과 R이라고 왼쪽, 오른쪽에 제네릭 타입을 지정할 수 있다.
class SimpleEither<L, R> implements Either<L, R> {
  // 만약 이 contructor에서 타입을 number로 주게 되면, L은 어떤 임의의 타입으로 만들어질 수 있기 때문에 숫자와 상관이 없다고 에러가 나온다.
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
// 이렇게 각기 다른 타입을 줄 수 있다.
const best: Either<object, string> = new SimpleEither({ name: "sue" }, "hello");
