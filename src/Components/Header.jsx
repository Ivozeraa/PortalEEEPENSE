import { Student } from 'phosphor-react'
import Styles from "../Styles/Header.module.css";
import "../Global.css";

export function Header() {
  return (
    <>
      <header className={Styles.header}>
        <h1 className={Styles.name}> <Student weight='bold'/> Portal EEEPENSE</h1>
      </header>
    </>
  );
}
