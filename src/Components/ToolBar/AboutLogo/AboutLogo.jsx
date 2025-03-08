import css from "./AboutLogo.module.css";
import { Link } from "react-router-dom";

export const AboutLogo = () => {
  return (
    <Link to={"/"} className={css.AboutLogo}>
      <h1 className={css.logoText}>ZLATMAX</h1>
      <div className={css.logoContainer}>
        <span>ЗЛАУСТОВСЬКІ </span>
        <img src="/img/Vector.png" alt="" />
        <span>НОЖІ</span>
      </div>
    </Link>
  );
};
