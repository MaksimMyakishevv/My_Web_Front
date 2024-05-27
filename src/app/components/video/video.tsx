import styles from "./video.module.css";
import Image from "next/image";

export default function Video() {
    return (
        <div className={styles.main}>
            <div className={styles.main1}>
                <div className={styles.text}>
                    <div className={styles.text1}>
                        About us
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet
                    </div>
                </div>
                <div className={styles.video}></div>
            </div>
        </div>
    );
}