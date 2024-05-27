import styles from "./number.module.css";
import Image from "next/image";

export default function Numberrs() {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                Design your Watch
            </div>
            <div className={styles.number}>
                {<Image src="Images/fr.svg" width={25} height={25} alt="Not found" className={styles.try1} />}
                <div className={styles.numbers1}>
                    <div className={styles.num}>Case Color</div>
                    <div className={styles.num}>Dial Design</div>
                    <div className={styles.num}>Dial Color</div>
                    <div className={styles.num}>Strap Design</div>
                </div>
            </div>
            <button className={styles.but}>Design Your Watch</button>
        </div>
    );
}