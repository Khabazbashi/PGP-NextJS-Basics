import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { productsRepo } from "../../helpers/productsrepo";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import styles from "../../styles/Details.module.css";

const Product = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    const data = productsRepo.getById(id);
    setProduct(data);
  }, [router.isReady]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.productContainer}>
        <div className={styles.header}>
          <Link href="/products">
            <img className={styles.exitIcon} src="/exit.png" />
          </Link>
        </div>

        <div className={styles.product}>
          <div className={styles.productDetails}>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productTitle}>{product.title}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>$ {product.price} </p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={product.image} />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.addButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
