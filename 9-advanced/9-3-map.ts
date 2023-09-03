{
  // 맵타입 =>  기존의 타입을 이용하면서 조금 다른 형태로 변환할 수 있는 것
  // 타입의 변경을 계속해서 하지 않아도 되고, 간편하고 재사용성이 용이하게 하는 것이 map 타입이다.
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
  // 💩 위의 VideoOptional, VideoReadOnly 타입을 map타입을 이용해 만들 것이다.

  // Optional 타입은 받아오는 타입을 통해서 재사용을 할 것이다 => map을 할 것
  type Optional<T> = {
    // for...in을 이용하면 object 에 있는 모든 key들을 하나하나씩 도는 연산자였음
    [P in keyof T]?: T[P];
    // P라는 것은 T타입의 모든 key들 중 하나이다.
    // T가 가지고 있는 key들 중에 들어있는 하나의 P라는 키는
    // Property는 T object 안에 잇는 key를 이용해 value를 정의할 수 있다.

    // ⭐ 즉, 이 type Optional<T>라는 것은
    // 기존에 있는 T object 타입에 모든 key들을 빙글빙글 돌면서
    // 그 타입에 해당하는 value를 다시 정의
  };

  // ⭐ 사용해보기
  type VideoOptional = Optional<Video>;
  // Video의 key들을 돌면서 title은 optional(?)로 만들고, title의 타입은 string
  // author을 optional로 만들고 author의 타입은 string
  // description을 optional로 만들고 description의 타입은 string

  // 모든 키값이 optional이라서 선택사항으로 들어가게된다, 그대신 타입에 없던 키값을 사용할 수는 없음 .
  const videoOp: VideoOptional = {
    title: "jo",
    description: "hello",
  };

  // ⭐ 사용해보기 2 , 타입으로 정의안하고 바로 사용
  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "히수",
  };

  // 이렇게 한 번 정의를 해두면 재사용성이 높다.

  // ReadOnly 타입 만들어주기 => 이렇게 하면 안에 데이터 타입이 변경 불가
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  // Optional을 사용하면 정해둔 타입을 변경이 가능하다 .😊
  const animal2: Optional<Animal> = {
    name: "dog",
  };
  animal2.name = "cat";

  // ⚠️ but, 정의해둔 ReadOnly 타입을 사용하면, 한 번 정의한 타입을 변경이 불가하다. 또한 optinal 타입이 아니기 때문에 무조건 키값을 다 넣어줘야함
  const animal3: ReadOnly<Animal> = {
    name: "dog",
    age: 2,
  };

  // 에러 발생 => ReadOnly로 정의했기 때문에 변경이 불가하다.
  // animal3.name = "gltn";

  // 👍 새로운 응용 예시 추가
  // Nullable의 타입은 기존의 value타입을 쓰거나 null이 가능하도록 만드는 타입
  type Nullable<T> = { [P in keyof T]: T[P] | null };

  // null이 가능하게 설정했기 때문에, null이 들어갈 수 있음 , 만약 Nullable이 아니면 null이 들어가면 에러 발생
  const obj2: Nullable<Video> = {
    title: "hi",
    author: "sue",
    description: null,
  };

  // 👍 새로운 응용 예시 추가
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    // 타입을 Proxy로 한 단계 더 감싸는 역할을 함
    [P in keyof T]: Proxy<T[P]>;
  };
}
