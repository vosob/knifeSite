import css from "./AboutLogo.module.css";

export const AboutLogo = () => {
  return (
    <div className={css.AboutLogo}>
      <h1 className={css.logoText}>ZLATMAX</h1>
      <div className={css.logoContainer}>
        <span>ЗЛАУСТОВСЬКІ </span>
        <img src="./public/img/Vector.png" alt="" />
        <span>НОЖІ</span>
      </div>
    </div>
  );
};
