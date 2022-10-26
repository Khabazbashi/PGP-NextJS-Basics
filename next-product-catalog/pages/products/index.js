import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Products from "../../components/Products";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { productsRepo } from "../../helpers/productsrepo";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState();
  let data = productsRepo.getAll();

  useEffect(() => {
    if (!router.isReady) return;
    setProducts(data);
  }, []);

  function filterProducts(category) {
    const filteredProducts = productsRepo.getByCategory(category);
    setProducts(filteredProducts);
  }

  if (!products) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Product Catalog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>Our Products</h1>
        <Filter filter={filterProducts} />
        <Products products={products} />
      </main>
    </div>
  );
}
