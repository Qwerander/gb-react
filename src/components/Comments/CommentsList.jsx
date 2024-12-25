import React, { useState } from "react";
import { Comment } from "./Comment";
import cls from "./comments.module.scss";

export const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              text={comment.text}
              onDelete={() => handleDelete(comment.id)}
            />
          ))}
        </ul>
      ) : (
        <p className={cls.noComment}>Нет комментариев.</p>
      )}
    </div>
  );
};
