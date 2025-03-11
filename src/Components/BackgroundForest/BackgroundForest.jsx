import { Card } from "../Card/Card";
import css from "./BackgroundForest.module.css";
export const BackgroundForest = () => {
  return (
    // <div className={"container"}>

    <div className={`container ${css.container}`}>
      <h1>Новинки</h1>
      <h3>
        Ласкаво просимо на офіційний сайт «ЗЛАТМАКС»! У нашому магазині
        представлений найширший вибір Златоустівських ножів від Златоустівських
        Збройних Фабрик та компаній, ми є офіційними постачальниками.
      </h3>

      <div className={css.CardList}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
