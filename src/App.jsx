import { Header } from './components/Header';

import { Post } from './post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Alexsandro Fischer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam, impedit porro suscipit recusandae hic quaerat deserunt aperiam molestiae enim et placeat est quae nemo expedita modi velit, voluptatem eum."
      />
      <Post
        author="Banana de pijama"
        content="teste"
      />
    </div>
  )
}