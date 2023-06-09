import './global.css'
import styles from './App.module.css'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedroriqque.png',
      name: 'Pedro Lima',
      role: 'Backend dev @Onfly'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      // { type: 'link', content: '#novoprojeto' },
      // { type: 'link', content: '#nlw' },
      // { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      // { type: 'link', content: '#novoprojeto' },
      // { type: 'link', content: '#nlw' },
      // { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-06-03 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      // { type: 'link', content: '#novoprojeto' },
      // { type: 'link', content: '#nlw' },
      // { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-06-09 20:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          {/* <Post author="Pedro" content="Lorem Ipsum Dolor Sit Amet" />
          <Post author="Pedro" content="Lorem Ipsum Dolor Sit Amet" /> */}
        </main>
      </div>
    </div>
  )
}

export default App
