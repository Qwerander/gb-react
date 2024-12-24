import cls from "./message.module.scss";


export const Message = ({ text }) => {
  return <div className={cls.message}>{text}</div>;
};
