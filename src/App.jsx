import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styless from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styless.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Matheus Lopes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab earum voluptas? Illum, consequuntur tempora. Asperiores totam cupiditate nesciunt natus dicta placeat in nemo laudantium optio eaque eveniet, quam nulla!"
          />

          <Post
            author="Fernado"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab earum voluptas? Illum, consequuntur tempora. Asperiores totam cupiditate nesciunt natus dicta placeat in nemo laudantium optio eaque eveniet, quam nulla!"
          />
        </main>
      </div>
    </div>
  )
}


