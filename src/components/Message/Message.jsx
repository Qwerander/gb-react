import cls from "./message.module.scss";
import classNames from "classnames";

export const Message = ({ text, small, bold }) => {
  return (
    <div
      className={classNames(cls.message, {
        [cls.small]: small,
        [cls.bold]: bold,
      })}
    >
      {text}
    </div>
  );
};
