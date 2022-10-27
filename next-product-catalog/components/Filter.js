import { productsRepo } from "../helpers/productsrepo";
import { useState } from "react";
import Filterelement from "./Filterelement";
import styles from "../styles/Filter.module.css";

const Filter = ({ filter }) => {
  const categories = productsRepo.getCategories();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    var content = document.getElementById("content");

    if (isActive) {
      content.className = styles.dropdownContentActive;
    } else {
      content.className = styles.dropdownContent;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={() => handleClick()}>
          CATEGORIES
        </button>

        <div id="content" className={styles.dropdownContent}>
          {categories.map((category, i) => {
            return (
              <Filterelement key={i} filter={filter} category={category} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
