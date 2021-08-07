type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMard = completed ? "[完]" : "[未]";
  return <p>{`${completeMard} ${title}(ユーザー:${userId})`}</p>;
};