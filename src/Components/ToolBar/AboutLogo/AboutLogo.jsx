import css from "./AboutLogo.module.css";

export const AboutLogo = () => {
  return (
    <div className={css.AboutLogo}>
      <h1>ZLATMAX</h1>
      <div>
        <span>ЗЛАУСТОВСЬКІ </span>
        <img src="./public/img/Vector.png" alt="" />
        <span>НОЖІ</span>
      </div>
    </div>
  );
};
