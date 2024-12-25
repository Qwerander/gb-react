import cls from './comments.module.scss';

export const Comment = ({ text, onDelete }) => {
  return (
    <li className={cls.comment}>
      <span>{text}</span>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
};
