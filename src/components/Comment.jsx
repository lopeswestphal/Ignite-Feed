import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/lopeswestphal.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Lopes</strong>
                            <time title="11 de Mario às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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