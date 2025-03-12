import { Card } from "../Card/Card";
import css from "./BackgroundForest.module.css";
import { FaChevronRight } from "react-icons/fa6";
export const BackgroundForest = () => {
  return (
    // <div className={"container"}>

    <div className={`container ${css.container}`}>
      <div>
        <h1 className={css.MainText}>Новинки</h1>
        <h3 className={css.Text}>
          Ласкаво просимо на офіційний сайт «ЗЛАТМАКС»! У нашому магазині
          представлений найширший вибір Златоустівських ножів від
          Златоустівських Збройних Фабрик та компаній, ми є офіційними
          постачальниками.
        </h3>
        <div className={css.Transition}>
          <h1 className={css.TextTransition}>Більше новинок</h1>
          <span className={css.Logo}>
            <FaChevronRight size={20} color="#E8AA31" />
          </span>
        </div>
      </div>

      <div className={css.CardList}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
