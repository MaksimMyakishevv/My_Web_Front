import styles from "./info.module.css";
import Image from "next/image";

export default function Info() {
    return (
        <div className={styles.main}>
            <div className={styles.min1}>
                {<Image src="Images/clock.svg" width={25} height={25} alt="Not found" className={styles.img1} />}
                <div className={styles.mob}>
                    <div className={styles.text1}>
                        {<Image src="Images/shere.svg" width={25} height={25} alt="Not found" className={styles.img2} />}
                        <div className={styles.og}>Individual Style </div>
                        <div className={styles.txog}>
                            <span>48 style combinations </span><br />
                            <span>Color shifting Dial Colors </span><br />
                            <span>15 Strap options </span><br />
                            <span>Custom Strap Engraving</span><br />
                        </div>
                    </div>
                    <div className={styles.text2}>
                        {<Image src="Images/shere.svg" width={25} height={25} alt="Not found" className={styles.img2} />}
                        <div className={styles.og}>High Quality Components </div>
                        <div className={styles.txog}>
                            <span>Case: 316L Stainless-steel</span><br />
                            <span>Coating: Color anodized anti-scratch </span><br />
                            <span>Glass: Sapphire Crystal </span><br />
                            <span>Straps: 22mm Stainless-steel bracelet, Milanese Mesh </span><br />
                            <span>bracelet, Leather</span><br />
                        </div>
                    </div>
                    {<Image src="Images/kak1.svg" width={25} height={25} alt="Not found" className={styles.img} />}
                    <div className={styles.text3}>
                        {<Image src="Images/shere.svg" width={25} height={25} alt="Not found" className={styles.img2} />}
                        <div className={styles.og}>Features </div>
                        <div className={styles.txog}>
                            <span>Case Size: 42mm</span><br />
                            <span>Case Color: Silver, Black, Blue, chamfered brush</span><br />
                            <span>with mirror polish</span><br />
                            <span>Dial Color: Black Metallic, Color shifting Blue-</span><br />
                            <span>Purple, Green-Purple, Pink-Gold</span><br />
                            <span>Water Resistance: 5 ATM/50 meters</span><br />
                            <span>Straps: Quick release</span><br />
                            <span>Movement: Swiss Parts RONDA 762E</span><br />
                            <span>Instantaneous rate -10/ +20 sec/month</span><br />
                            <span>Standard Battery life: 10 years</span><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
