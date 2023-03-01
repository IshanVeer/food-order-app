import React, { Fragment } from "react";
import classes from "./Header.module.css";
import heroImage from "../../assets/images/meals.jpg";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodWorld</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={heroImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
