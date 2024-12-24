 './styles/';

import { Message } from "./components/Message/Message";

export const App = () => {

  return (
    <>
      <Message text={'Первое задание'}/>
      <Message text={'Создать компонент Message, отображающий переданный ему props текст'}/>
    </>
  );
};
