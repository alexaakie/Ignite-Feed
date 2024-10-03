import { Header } from './components/Header';

import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
        author="Alexsandro Fischer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam, impedit porro suscipit recusandae hic quaerat deserunt aperiam molestiae enim et placeat est quae nemo expedita modi velit, voluptatem eum."
      />
      </main>

      </div>
    </div>
  )
}