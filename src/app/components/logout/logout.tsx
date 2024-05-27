import { useState } from "react";
import styles from "./logout.module.css";
import Link from "next/link";


export default function Logout() {
    const [hovered, setHovered] = useState(false);
    const handleLogout = () => {
        // Удалить токен из localStorage
        localStorage.removeItem('token'); }
    return (

        <div className={styles.main}>
            <Link href={'/'} className={styles.link}>
                <button className={styles.button} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} onClick={handleLogout}>Log out</button>
            </Link>
        </div>
    );
}