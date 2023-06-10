import { Avatar } from './avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css'

export function Comment({ content, ...props}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedroriqque.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="Publicado 11 de maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer className={styles.footer}>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}