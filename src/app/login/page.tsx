import Headermenu from "../components/header/header";
import Fotter from "../components/Fotter/fotter";
import styles from "./page.module.css";
import ReactQueryProvider from "../providers/react-querry";
import Maink from "../components/loginn/login";


export default function Log() {
  return (
    <div className={styles.home}>
      <ReactQueryProvider>
        <Headermenu />
        <Maink/>
        <Fotter />
      </ReactQueryProvider>
    </div>
  );
}