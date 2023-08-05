{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";

  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   *   String Literal Types
   */
  // Name이라는 타입에 "name"이라는 문자 타입을 줌, Name이라는 타입은 "name"을 제외한 어떠한 문자값도 들어가지 못한다.
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
