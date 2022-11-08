import {Post} from './Post';
import {Header} from './components/Header';

import './global.css'

function App() {

  return (
    <>
      <Header></Header>
      <h1>Hello World!</h1>
      <Post 
        name="Ricardo" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a quisquam consectetur ipsam labore et rerum, in doloremque officiis vel architecto eum! Laudantium reprehenderit dolores sequi, culpa fugiat quaerat facilis?"/>  
    </>
  )
}

export default App
