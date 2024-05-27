import styles from "./folow.module.css";
import Image from "next/image";

export default function Folow() {
    return (
        <div className={styles.main}>
            <div className={styles.main1}>
                <div className={styles.text}>Dont miss your chance to get free Giveaway
                    Sing up to our newsletter</div>
                <div className={styles.text1}>We will inform you about coming Giveaways, Offers,
                    Online Store preparation progress and start of sales</div>
                <div className={styles.input}>
                    <input type="text" name="username" placeholder="     Name" className={styles.input1} />
                    <input type="text" name="username" placeholder="     Email" className={styles.input1}/>
                </div>
                <button className={styles.button}>Sign Up</button>
                <div className={styles.text2}>You agree to our Terms and Conditions</div>
            </div>
        </div>
    );
}