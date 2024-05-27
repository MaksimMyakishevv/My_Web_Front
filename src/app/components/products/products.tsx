'use client'
import ProductyCard from "@/app/Productbd/productbd";
import styles from "./products.module.css";
import { useProductsQuery } from "@/app/hooks/useProductQuerry";

export default function Product() {
    const { data, isLoading, isSuccess } = useProductsQuery();
    console.log(data)
    return (
        <div className={styles.main}>
            <div className={styles.main1}>
                <div className={styles.text}>Watches</div>
                <div className={styles.text1}>Volumenzeit gives you a total of 48 style combinations with 4 dial types, 4 dial colors, 3 case colors,
                    multiple stylish strap combinations, and customized engraving options.</div>
                <div className={styles.productscroll}>
                    {data?.map(product => (
                        <ProductyCard {...product} key={product.id} />
                    ))}
                </div>
                <button className={styles.buttons}>Design Your Watch
                </button>
            </div>
        </div>
    );
}