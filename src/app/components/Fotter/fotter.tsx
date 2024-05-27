import styles from "./fotter.module.css";
import Image from "next/image";

export default function Fotter() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}></div>
            <div className={styles.text}>© Copyright 2022 wolumenzeit - All rights reserved.</div>
        </div>
    );
}