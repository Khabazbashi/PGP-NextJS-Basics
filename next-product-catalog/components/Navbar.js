import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Search from "./Search";

export default function Navbar({ search }) {
  return (
    <div className={styles.container}>
      <Link href="/products">
        <p className={styles.title}>
          <span className={styles.titleSpan}>ADDA</span>LICIOUS
        </p>
      </Link>
      <Search search={search} />
    </div>
  );
}
