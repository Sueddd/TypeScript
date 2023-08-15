{
  // Array
  const fruits: string[] = ["strawberry", "banana"];
  const scores: Array<number> = [1, 2, 3];

  // 타입 고정 > 변경 불가
  function printArray(fruits: readonly string[]) {
    return { fruits };
  }

  printArray(["a", "b"]);

  // Tuple > 튜플은 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열
  // 튜플 사용 권장 x, 인덱스처럼 정의하면 가독성 떨어짐
  let student: [string, number];
  student = ["name", 123]; // 값을 이렇게 주고
  student[0]; // name
  student[1]; // 123

  // 가독성이 좋지 않은 걸 피할 수 있는 법 => object distructure
  // student 안의 첫번째가 name으로 두번째가 age로 간다.
  // 튜플을 이렇게 받을 수도 있음
  const [name, age] = student; // 이름을 이렇게 주는듯
  let person: [string, number];
  person = ["qw123", 12322];
  const [id, pw] = person;

  // useState가 튜플형태 처럼 나온다. 
  // react는 리턴타입을 튜플로 정의함 > 서로 다른 타입을 동적으로 
}
