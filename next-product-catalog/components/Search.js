import styles from "../styles/Search.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { productsRepo } from "../helpers/productsrepo";

const Search = ({ search }) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);
  const [products, setProducts] = useState();

  //   useEffect(() => {
  //     if (!router.isReady) return;
  //     setProducts(data);
  //   }, []);

  const handleChange = (e) => {
    if (isFormActive) {
      setInput(e.target.value);
      search(input);
    }
  };

  const handleClick = () => {
    setInput("");
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="What do you want to shop?"
        onFocus={() => setIsFormActive(true)}
        onBlur={() => setIsFormActive(false)}
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
      ></input>
      {input === "" && (
        <img
          className={styles.searchIcon}
          onClick={() => handleClick()}
          src="/search.png"
        />
      )}
      {input !== "" && (
        <img
          className={styles.exitIcon}
          onClick={() => handleClick()}
          src="/exit.png"
        />
      )}
    </div>
  );
};

export default Search;
