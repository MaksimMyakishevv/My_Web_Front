import Fotter from "./components/Fotter/fotter";
import Folow from "./components/follow/folow";
import Headermenu from "./components/header/header";
import Info from "./components/info/info";
import Info1 from "./components/info1/info1";
import Main from "./components/main/main";
import Numberrs from "./components/number/number";
import Video from "./components/video/video";
import styles from "./page.module.css";
import Product from "./components/products/products";
import ReactQueryProvider from "./providers/react-querry";


export default function Home() {
  return (
    <div className={styles.home}>
      <ReactQueryProvider>
        <Headermenu />
        <Main />
        <Info />
        <Numberrs />
        <Info1 />
        <Product />
        <Video />
        <Folow />
        <Fotter />
      </ReactQueryProvider>
    </div>
  );
}