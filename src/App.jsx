import './global.css'
import styles from './App.module.css'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/post'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Pedro" content="Lorem Ipsum Dolor Sit Amet" />
          <Post author="Pedro" content="Lorem Ipsum Dolor Sit Amet" />
        </main>
      </div>
    </div>
  )
}

export default App
