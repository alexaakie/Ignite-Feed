import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [ likeCount, setLikeCount ] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount + 1); // Atualiza o contador de likes
        // console.log(likeCount);
    }

    function handleDeleteComment(){

    onDeleteComment(content) // envia o comentário para ser deletado ao post
    }
    return (
        <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/alexaakie.png" alt=""/>

        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Alex</strong>
                    <time title='11 de maio às 08:13' dateTime="2022-05-11 08:15:00">Publicado há 1h</time>
                </div>
                <button onClick={handleDeleteComment} tittle='Trash'>
                    <Trash size={24}/>
                </button>
            </header>
            <p>
            {content}
            </p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
        </div>
    )
}