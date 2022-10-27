import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Filterelement.module.css";

const Filterelement = ({ category, filter }) => {
  const router = useRouter();
  const [isFilterActive, setIsFilterActive] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
  }, [handleClick]);

  const handleClick = () => {
    setIsFilterActive(!isFilterActive);
    var item = document.getElementById(category);
    if (isFilterActive) {
      item.style = "background-color:#57a6bf";
    } else {
      item.style = "background-color:white";
    }
    filter(category);
  };

  return (
    <div>
      <p
        className={styles.category}
        id={`${category}`}
        onClick={() => handleClick()}
      >
        {category}
      </p>
    </div>
  );
};

export default Filterelement;
