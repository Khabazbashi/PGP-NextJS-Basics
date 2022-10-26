import { productsRepo } from "../helpers/productsrepo";
import styles from "../styles/Filter.module.css";

const Filter = ({ filter }) => {
  const categories = productsRepo.getCategories();

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={styles.ul}>
          <p className="dropbtn">Filter</p>
          <div className={styles.dropdownContent}>
            {categories.map((category, i) => {
              return (
                <button
                  key={i}
                  className={styles.li}
                  onClick={() => filter(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
