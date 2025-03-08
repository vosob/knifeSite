import css from "./Card.module.css";

export const Card = () => {
  return (
    <div className={css.cardContainer}>
      <img src="" alt="" />
      <h3></h3>
      <div>
        <span>95х18</span>
        <span>Орех, Алюминий</span>
      </div>
      <div>
        <div></div>
        <span>12 отзывов</span>
        <div className={css.spacer}></div>
      </div>
    </div>
  );
};
