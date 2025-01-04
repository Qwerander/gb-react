import {
  CommentsList,
  Message,
  TemperatureConverter,
  TodoList,
} from "../../components";

export const FirstThreeTaskPage = () => {
  return (
    <>
      <div className="task">
        <Message text={"Первый семинар"} bold />
        <Message
          text={
            "Создать компонент Message, отображающий переданный ему props текст"
          }
        />
      </div>
      <div className="task">
        <Message text={"Второй семинар"} bold />
        <CommentsList />
      </div>
      <div className="task">
        <Message text={"Третьий семинар"} bold />
        <Message text={"Первая задача"} small />
        <TemperatureConverter />
        <Message text={"Вторая задача"} small />
        <TodoList />
      </div>
    </>
  );
};
