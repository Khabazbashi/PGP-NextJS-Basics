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
      <div className={styles.product}>
        <div className={styles.productDetails}>
          <p>This is product:</p>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={product.image} />
        </div>
      </div>
      <Link href="/products">return</Link>
    </div>
  );
};
export default Product;
