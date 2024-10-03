import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.coment}>
        <img src="https://github.com/alexaakie.png"/>

        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Alex</strong>
                    <time title='11 de maio às 08:13' datetime="2022-05-11 08:15:00"></time>
                </div>
                <button Tittle='Trash'>
                    <Trash size={20}/>
                </button>
            </header>
            <p>
            Muito Bom Dev, Parabéns 🫲😉
            </p>
        </div>
        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
        </div>
        </div>
    )
}