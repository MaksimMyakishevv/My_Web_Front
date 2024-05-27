import { useState } from "react";
import styles from "./authbut.module.css";
import Link from "next/link";


export default function Authbut() {
    const [hovered, setHovered] = useState(false);
    return (

        <div className={styles.main}>
            <Link href={'/login'} className={styles.link}>
                <button className={styles.button} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>Login</button>
            </Link>
            <Link href={'/regestration'} className={styles.link}>
                <button className={styles.button} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} >
                    Sign up
                </button>
            </Link>
        </div>
    );
}