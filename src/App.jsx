import { CommentsList } from "./components/Comments/CommentsList";
import { Layout } from "./components/layout/Layout";
import { Message } from "./components/Message/Message";

export const App = () => {
  return (
    <Layout>
      <div className="task">
        <Message text={"Первое задание"} />
        <Message
          text={
            "Создать компонент Message, отображающий переданный ему props текст"
          }
        />
      </div>
      <div className="task">
        <Message text={"Второе задание"} />
        <CommentsList />
      </div>
    </Layout>
  );
};
