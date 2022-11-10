/* eslint-disable jsx-a11y/alt-text */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.dicebear.com/api/avataaars/def.svg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className="authorAndTime">
              <strong>Marcelo Henrique</strong>
              <time title="11 de novembro às 15:29" dateTime="2022-11-09 15:28">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar" type="button">
              <Trash size="20" />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit amet.
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
