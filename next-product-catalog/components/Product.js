import styles from "../styles/Product.module.css";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={product.image} />
        </div>
        <div className={styles.contentContainer}>
          <a>{product.title}</a>
          <a> {product.category}</a>
          <a>{product.price}</a>
        </div>
      </div>
    </Link>
  );
}

// href={`/${item.id}`}
