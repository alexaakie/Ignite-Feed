import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import sweetalert2 from 'sweetalert2'



export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post é bacana', // array dos comentários já adicionados
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function handleCreateNewComment() {
        event.preventDefault()
        if (newCommentText.trim() === '') {
            new sweetalert2({
                icon: "error",
                title: "Oops...",
                text: "Não é possivel publicar comentários vazios!",
              });
            return; // Interrompe a execução se o comentário estiver vazio
        }

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(CommentToDelete) {
        const commentsWithoutDeletedOne = comments.filter (comment => {
            return comment != CommentToDelete
        })
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}
                        </strong>
                        <span>
                            {author.role}
                        </span>
                    </div>
                </div>


                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link')
                        return <p key={line.content}><a href="#" >{line.content}</a></p>;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentarios}>
                <strong>deixe seu feedback</strong>
                <textarea
                    name='comment'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                />
                <footer><button type='submit'>Publicar</button></footer>
            </form>
            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return (<Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}