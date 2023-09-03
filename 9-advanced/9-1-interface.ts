type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 이렇게 추가도 가능
// 각각 다른 곳에서 정의했지만, 합쳐서 사용 가능 => 타입은 이런 방식을 사용할 수 없다.
interface PositionInterface {
  z: number;
}

// type alias와 interface 둘 다 object 형태로 만들 수 있다.
// object => ⭐

// obj1 은 PositionType이라는 type alias 타입을 가짐
const obj1: PositionType = {
  x: 1,
  y: 1,
};

// obj2는 PositionInterface라는 인터페이스 타입을 가짐
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class ⭐ => 타입과 인터페이스 모두 클래스에서 구현 가능
// Pos1이라는 클래스는 PostitionType을 구현
class Pos1 implements PositionType {
  x: number;
  y: number;
}

// Pos2라는 클래스는 PositionInterface를 구현
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends => 확장도 가능
// 기존 인터페이스(PositionInterface) 확장
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// 기존 type alias에 {z : number}를 추가
type ZPositionType = PositionType & { z: number };

// ⭐ only interfaces can be merged. => 인터페이스만 결합이 가능
interface PositionInterface {
  z: number;
}

// 중복되는 타입(결합)은 사용 불가 > 인터페이스만 가능
// type PositionType {

// }

// 😊 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

// Name이라는 타입은 Person에 있는 name이라는 값의 타입을 쓸 것이다.
// Name은 string 타입이 된다
type Name = Person["name"]; // string

// type alias와 interface는 언뜻보면 비슷해 보이겠지만, 다른 점이 많다.

// 유니온 타입은 인터페이스로는 절대 구현하지 못한다.
type NumberType = number;
type Direction = "left " | "right";
