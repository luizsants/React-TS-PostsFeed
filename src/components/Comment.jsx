import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder src="https://github.com/luizsants.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Santos</strong>
                            <time title="27 de agosto às 21:47" dateTime="2022-05-11 21:47:00">Cerca de 1h atrás</time>


                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}
