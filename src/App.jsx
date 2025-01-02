import { Container } from "@mui/material";
import {
  CommentsList,
  TemperatureConverter,
  Message,
  TodoList,
} from "./components";

export const App = () => {
  return (
    <Container maxWidth="sm">
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
    </Container>
  );
};
