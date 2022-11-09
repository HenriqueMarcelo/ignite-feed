import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            name="Ricardo"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a quisquam consectetur ipsam labore et rerum, in doloremque officiis vel architecto eum! Laudantium reprehenderit dolores sequi, culpa fugiat quaerat facilis?"
          />
          <Post
            name="Ricardo"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a quisquam consectetur ipsam labore et rerum, in doloremque officiis vel architecto eum! Laudantium reprehenderit dolores sequi, culpa fugiat quaerat facilis?"
          />
          <Post
            name="Ricardo"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a quisquam consectetur ipsam labore et rerum, in doloremque officiis vel architecto eum! Laudantium reprehenderit dolores sequi, culpa fugiat quaerat facilis?"
          />
          <Post
            name="Ricardo"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a quisquam consectetur ipsam labore et rerum, in doloremque officiis vel architecto eum! Laudantium reprehenderit dolores sequi, culpa fugiat quaerat facilis?"
          />
        </main>
      </div>
    </>
  );
}

export default App;
