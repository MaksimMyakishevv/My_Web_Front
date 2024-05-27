'use client';
import styles from "./header.module.css";
import Image from "next/image";
import cn from "clsx";
import Authbut from "../authbut/authbut";
import { useState } from "react";
import Logout from "../logout/logout";
import Burgmenu from "../burgmenu/burg";

export default function Headermenu() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [menuIsOpen1, setMenuIsOpen1] = useState(false);
    const token = localStorage.getItem('token');
    const handleClick = () => {
      setMenuIsOpen((prevState) => !prevState);
    };
    const handleClick1 = () => {
      setMenuIsOpen1((prevState) => !prevState);
    };
    return (
      <div className={styles.bughed}>
      <header className={styles.header__menu}>
        <div className={styles.header__img}>
          {<Image src="Images/Mask group.svg" width={255} height={46} alt="Not found" className={styles.logo} />}
        </div>
        <nav className={styles.headerNav}>
          <div className={styles.header__icons2}>
          <Image src="Images/Group 1089.svg" width={22} height={20} alt="Not found" />
          </div>
          <button className={styles.iconburg} onClick={handleClick1}>
          <Image src={menuIsOpen1 ? 'Images/nion.svg' : 'Images/burgmenu.svg'} width={22} height={20} alt="Not found" />
          </button>
          <ul className={styles.headermenu__columns}>
            <li className={styles.header__item}>
              Watches
            </li>
            <li className={styles.header__item}>
              Accessories
            </li>
            <li className={styles.header__item}>
              Jewelry
            </li>
            <li className={styles.header__item}>
              Brand
            </li>
            <li className={styles.header__item}>
              Watches
            </li>
            <button className={styles.header__butoon}>
              Design you watch
            </button>
            <button className={styles.header__icons} onClick={handleClick}>
              <Image src="Images/Group 1088.svg" width={13} height={17} alt="Not found" />
            </button>
            {token?(
              menuIsOpen && <Logout/>
            ): menuIsOpen && <Authbut/>}
            <div className={styles.header__icons1}>
              <Image src="Images/Group 1089.svg" width={17} height={17} alt="Not found" />
            </div>
          </ul>
        </nav>
      </header>
      {menuIsOpen1 && <Burgmenu />}   
      </div>
    );
  }
