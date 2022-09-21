import React from "react";
import meals from "../../meals.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton.js";

function Header(props) {
  let text = "Image not displayed, try again!";

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Food Restaurant</h1>
        <HeaderButton title="Cart"></HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt={text} />
      </div>
    </React.Fragment>
  );
}

export default Header;
