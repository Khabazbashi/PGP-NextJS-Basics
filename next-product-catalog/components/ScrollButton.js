import styles from "../styles/Scrollbutton.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const router = useRouter();
  const [mybutton, setmyButton] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    let mybutton = document.getElementById("myBtn");
    setmyButton(mybutton);
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <button id="myBtn" className={styles.myBtn} onClick={() => topFunction()}>
        <img className={styles.buttonImage} src="/top.png" />
      </button>
    </div>
  );
};

export default ScrollButton;
