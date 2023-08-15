{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 수정이 더이상 안되게 Object.freeze를 이용해 얼림
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
  });
  const datOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  enum Days {
    Monday = 1, // 이렇게 지정하면 1부터 시작
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday); //1
  let day: Days = Days.Saturday; // day라는 변수는 Days라는 타입을 할당 받을 수 있다.
  day = Days.Tuesday;

  console.log(day); // 5

  // 타입스크립트에서는 왠만해서 enum을 쓰지 않는 것이 좋다.
  // 타입이 정확하게 보장되지 않기 때문이다.

  // 유니온 타입으로 대체가 가능하고, 타입 보장이 되기 때문에 union이 좋다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Tuesday";

  
}
