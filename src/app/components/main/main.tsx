/* eslint-disable @next/next/no-page-custom-font */
'use client';
import styles from "./main.module.css";
import Image from "next/image";
import cn from "clsx";

export default function Main() {
    return (
        <div className={styles.main__pos}>
            {<Image src="Images/53 1.svg" width={1096} height={524} alt="Not found" className={styles.image1} />}
            <div className={styles.main__soc}>
                <div className={styles.icons}>
                    {<Image src="Images/icon1.svg" width={25} height={25} alt="Not found" className={styles.ic} />}
                </div>
                <div className={styles.icons}>
                    {<Image src="Images/icon2.svg" width={25} height={25} alt="Not found" className={styles.ic} />}
                </div>
                <div className={styles.icons}>
                    {<Image src="Images/icon3.svg" width={25} height={25} alt="Not found" className={styles.ic} />}
                </div>
                <div className={styles.icons}>
                    {<Image src="Images/icon4.svg" width={25} height={25} alt="Not found" className={styles.ic} />}
                </div>
                <div className={styles.soc_text}>
                    Folow us
                </div>
            </div>
            <div className={styles.soc_text1}>
                    Folow us
                </div>
            <div className={styles.img}>
                <div className={styles.main__s}>
                    <div className={styles.main__text}>
                        <span>Find your </span>
                        <span>dream watch</span>
                    </div>
                    <div className={styles.main__text1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
                    </div>
                    <div className={styles.button__st}>
                        <button className={styles.button__style}>
                            Design Your Watch
                        </button>
                    </div>
                </div>
                {<Image src="Images/53 1.svg" width={1096} height={524} alt="Not found" className={styles.image} />}
            </div>
        </div>
    );
}