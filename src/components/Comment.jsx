/* eslint-disable jsx-a11y/alt-text */
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // Sempre que eu precisar atualizar um estado com base no estado anterior
    // é para utilizar uma arrow function, pois o parâmetro dela é o valor atualizado
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.dicebear.com/api/avataaars/def.svg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Henrique</strong>
              <time title="11 de novembro às 15:29" dateTime="2022-11-09 15:28">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar" type="button" onClick={handleDeleteComment}>
              <Trash size="24" />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button title="Deletar" type="button" onClick={handleLikeComment}>
            <ThumbsUp size="20" />
            Aplaudir
            {' '}
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
