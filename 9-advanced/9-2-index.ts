{
  const obj = {
    name: "sue",
  };

  // name이라는 키에 접근하는 두가지 방법
  obj.name; // sue
  obj["name"]; // sue

  // 타입도 인덱스를 기반으로해서 결정할 수 있다.
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // Name의 타입은 string이 된다.
  // Animal의 name이라는 key의 타입을 Name에 선언하는 것이다.
  type Name = Animal["name"]; // string
  const text: Name = "hello"; // 문자열만 할당 가능

  type Gender = Animal["gender"]; // 'male' | 'female'

  // keyof Animal = Animal에 있는 모든 타입을 keys에 할당하는 것
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  // 데이터를 할당할 때 key에 들어있는 문자열 즉, 'name', 'age', 'gender'만 들어갈 수 있다.
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  // Person의 gender는 male | female
  const person: Person = {
    name: "sue",
    gender: "male",
  };

  // 이처럼 인덱스 타입을 이용하면 다른 타입에 있는 키에 접근해서 키의 value의 타입을 그대로 다시 선언할 수 있다.
}
