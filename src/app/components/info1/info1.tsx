import styles from "./info1.module.css";
import Image from "next/image";

export default function Info1() {
    return (
        <div className={styles.main}>
            <div className={styles.picture}></div>
            <div className={styles.tran}></div>
            <div className={styles.text}>
                <div className={styles.text1}>Our Mission</div>
                <div className={styles.text2}>We have invested 6 year of our lifes to invent a new technology of production a 3D dials with quality of wristwatch industry.
                    All what we need to turn on our imagination on maximum.</div>
                <div className={styles.text3}>We love Out-of-the-box designs and believe there are many people who thinks the same.</div>
                <button className={styles.button}>Design Your Watch</button>
            </div>
        </div>
    );
}