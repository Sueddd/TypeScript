{
  // union의 반대 > 모든 것을 다 합한 => and
  /**
   * Intersection Types : &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  // person은 Student 타입과 Worker의 타입을 모두 가짐
  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // Student와 Worker에 있는 속성을 모두 넣어줘야만 함.
  internWork({
    name: "ellie",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
