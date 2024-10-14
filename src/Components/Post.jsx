import Styles from "../Styles/Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src="https://github.com/Ivozeraa.png" />
          <div className={Styles.authorInfo}>
            <strong>Ivo Devs</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="13 de Outubro as 16:14" dateTime="2024-10-13 16:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={Styles.content}>
        <p>Iniciando novo projeto com React</p>
        <p>Um sistema Web para comunicação entre EEEP's</p>
        <p>
          <a href="#a">#novoprojeto</a> <a href="#a">#teste</a>{" "}
        </p>
      </div>

      <form className={Styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
