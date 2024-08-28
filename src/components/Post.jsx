/* eslint-disable react/prop-types */

import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>

    
      {/** Cabeçalho */}

      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/luizsants.png" />
          <div className={styles.authorInfo}>
            <strong>Luiz</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="27 de agosto às 21:47" dateTime="2022-05-11 21:47:00">Publicado há 1h</time>
      </header>

    
      {/** Conteúdo */}

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

        <p>{'👉 '}<a href=""> jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      {/** Formulário */}

      <form className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'

        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />

      </div>

    </article>
  );
}
