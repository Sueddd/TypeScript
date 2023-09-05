{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // Partial은 기존의 타입 중에서 변경하고 싶은 것만 업데이트 가능하게 해준다.
  // 부분적인 것만 허용할 수 있을 때 사용 가능.
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { label: "hard", priority: "low" });
  console.log(updated);
}
type ToDo = {
  title: string;
  description: string;
};

// utility type으로 정의된 Readonly 사용
function display(todo: Readonly<ToDo>) {
  // Readonly로 설정해서 수정이 불가능하게 된다.
  todo.title = "jaja"; // 💩 error
}
