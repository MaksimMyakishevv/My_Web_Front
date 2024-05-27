import Headermenu from "../components/header/header";
import Fotter from "../components/Fotter/fotter";
import styles from "./page.module.css";
import ReactQueryProvider from "../providers/react-querry";
import Link from "next/link";
import Mainnn from "../components/regest/regest";


export default function Reg() {
  return (
    <div className={styles.home}>
      <ReactQueryProvider>
        <Headermenu />
        <Mainnn/>
        <Fotter />
      </ReactQueryProvider>
    </div>
  );
}