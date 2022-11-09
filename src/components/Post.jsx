/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.dicebear.com/api/avataaars/abc.svg" alt="Perfil" />
          <div className={styles.authorInfo}>
            <strong>Marcelo Henriques</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de novembro às 15:29" dateTime="2022-11-09 15:28">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 😋</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>In odio maxime, placeat repellendus iure aut et corrupti temporibus similique odit.</p>
        <p>
          <a href="#">marcelo.tv</a>
        </p>
        <p>
          <a href="#">#abc </a>
          {' '}
          <a href="#">#farofa </a>
          {' '}
          <a href="#">#praia</a>
          {' '}
        </p>
      </div>
    </article>
  );
}
