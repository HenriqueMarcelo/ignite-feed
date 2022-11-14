/* eslint-disable jsx-a11y/alt-text */
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
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
          <button title="Deletar" type="button">
            <ThumbsUp size="20" />
            Aplaudir
            {' '}
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
