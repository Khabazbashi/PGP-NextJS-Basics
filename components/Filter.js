import { productsRepo } from "../helpers/productsrepo";
import Filterelement from "./Filterelement";
import styles from "../styles/Filter.module.css";

const Filter = ({ filter }) => {
  const categories = productsRepo.getCategories();

  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        return <Filterelement key={i} filter={filter} category={category} />;
      })}
    </div>
  );
};

export default Filter;
