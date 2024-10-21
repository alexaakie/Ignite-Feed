import { Header } from './components/Header';

import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
import { Avatar } from './components/avatar';


const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/alexaakie.png',
      name: 'Alexsandro Fischer',
      role: 'DEV TRISTE',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'aleki.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: './src/assets/image.png',
      name: 'Wellington Schwambach',
      role: 'DEV que é TRISTE DEMAIS',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Se PHP fosse bom se chamava react.' },
      { type: 'link', content: 'well.design/podresdoginfo' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}

          />  
          )  
        })}
        </main>

      </div>
    </div>
  )
}