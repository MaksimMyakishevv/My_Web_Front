/* eslint-disable react/jsx-no-undef */
'use client';
import styles from "./burg.module.css";
import Image from "next/image";


export default function Burgmenu() {
    return (
        <div className={styles.main}>
            <div className={styles.text}>Home</div>
            <div className={styles.text}>Features</div>
            <div className={styles.text}>Our Mission</div>
            <div className={styles.text}>About Us</div>
            <div className={styles.text}>Watches</div>
            <div className={styles.text1}>
                <Image src="Images/Group 1088.svg" width={18} height={20} alt="Not found" />
                <div>My Account</div>
            </div>
            <div className={styles.text1}>
                <Image src="Images/Group 1089.svg" width={22} height={20} alt="Not found" />
                <div>Cart</div>
            </div>
            <button className={styles.button}>Design Your Watch</button>
            <button className={styles.button1}>Sign In / Register</button>
        </div>
    );
}