/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './productbd.module.css';
import { Product } from '../types/product';

export default function ProductyCard(props: Product) {

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={`http://localhost:3001/api/product/image/${props.image}`} alt="Not found" className={styles.img1} />
            </div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.price}>${props.prices}</div>
        </div>
    );
}