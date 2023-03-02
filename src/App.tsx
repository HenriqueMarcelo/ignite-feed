import { faker } from '@faker-js/faker/locale/pt_BR';
import { Post, PostProps } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

interface PostPropsWithID extends PostProps {
  id: string;
}

const posts: PostPropsWithID[] = faker.datatype.array().map(() => ({
  id: faker.datatype.uuid(),
  author: {
    avatarUrl: `https://i.pravatar.cc/150?u=${faker.word.verb()}`,
    name: faker.name.fullName(),
    role: faker.name.jobType(),
  },
  content: [
    { type: 'paragraph', content: `${faker.lorem.sentence(2)} ${faker.internet.emoji()}` },
    { type: 'paragraph', content: faker.lorem.sentence() },
    { type: 'paragraph', content: faker.lorem.sentence() },
    { type: 'link', content: faker.internet.url() },
  ],
  publishedAt: faker.date.recent(2),
}));

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
