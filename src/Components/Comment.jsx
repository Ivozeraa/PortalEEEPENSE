import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../Styles/Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Ivozeraa.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ivo Devs</strong>
              <time
                title="13 de Outubro as 16:14"
                dateTime="2024-10-13 16:13:00"
              >
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Ivo Devs soluções!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
