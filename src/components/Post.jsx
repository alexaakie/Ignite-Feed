import styles from './Post.module.css'

import { Comment } from './Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/75465847?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>
                            Alexsandro Fischer
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                </div>


                <time title='25 de setembro de 2024 às 21:21' dateTime='2024-09-25 21:21:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href=''>jane.design/doctorcare</a></p>
               <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.comentarios}>
            <strong>deixe seu feedback</strong>
            <textarea 
            placeholder='Deixe seu comentário'
            />
            <footer><button type='submit'>Publicar</button></footer>
            </form>
            <div className={styles.CommentList}>
            <Comment></Comment>
            </div>
        </article>
    )
}