import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface commentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}



export function Comment({ content, onDeleteComment }: commentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder src="https://github.com/luizsants.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Santos</strong>
              <time
                title="27 de agosto às 21:47"
                dateTime="2022-05-11 21:47:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
