import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.dicebear.com/api/avataaars/aa.svg',
      name: 'Marcelo Henrique',
      role: 'Cantor Sertanejo',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 😋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'In odio maxime, placeat repellendus iure aut et corrupti temporibus similique odit.' },
      { type: 'link', content: 'marcelo.tv' },
    ],
    publishedAt: new Date('2022-11-11 14:03'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.dicebear.com/api/avataaars/bb.svg',
      name: 'João Silva',
      role: 'Pintor',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 😋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
      { type: 'paragraph', content: 'In odio maxime, placeat repellendus iure aut et corrupti temporibus similique odit.' },
      { type: 'link', content: 'marcelo.tv' },
    ],
    publishedAt: new Date('2022-11-11 10:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
