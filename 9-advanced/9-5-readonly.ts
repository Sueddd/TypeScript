{
  type ToDo = {
    title: string;
    description: string;
  };

  // Readonly가 이미 utility type으로 정의되어 있음
  function display(todo: Readonly<ToDo>) {
    // Readonly로 설정해서 수정이 불가하게 되어있음
    // todo.title = "jaja";
  }

  // Partial => optional 타입 > 부분적인 데이터 담고 싶을 때
  // Required => optional의 반대 > 절대적인 , optioanl 데이터를 반대로 변경시켜줌
}
