import { Gear } from 'phosphor-react';
import Styles from "../Styles/Sidebar.module.css";
import "../Global.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <>
      <aside className={Styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={Styles.cover}
          alt=""
        />

        <div className={Styles.profile}>
          <Avatar src="https://github.com/Ivozeraa.png" />
          <strong>Ivo Devs</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <span>
            <Gear weight={'bold'} size={20} className={Styles.gear}/>
            Editar Perfil
            </span>
        </footer>
      </aside>
    </>
  );
}
