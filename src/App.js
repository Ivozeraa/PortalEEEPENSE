import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";
import Styles from "./Styles/App.module.css";
import "./Global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={Styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  );
}
