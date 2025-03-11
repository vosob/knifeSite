import css from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export const Card = () => {
  return (
    <div className={css.cardContainer}>
      <div className={css.CardMain}>
        <img src="/img/Card/Blade of a snap off knife -13.png" alt="" />
      </div>
      <div className={css.WrightMain}>
        <h3>Ніж Лиса</h3>
      </div>
      <div className={css.CardComments}>
        <span>95х18</span>
        <span>Горіх, Алюміній</span>
      </div>
      <div className={css.CardReview}>
        <div className={css.ReviewLogo}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div>
          <span className={css.Number}>12 відгуків</span>
        </div>
      </div>
      <div className={css.spacer}></div>

      <div className={css.CardSection}>
        <div>
          <span className={css.CardMoney}>2719 uah</span>
        </div>
        <div>
          <LiaBalanceScaleSolid size={30} />

          <span>
            <CiHeart size={30} color="#e8aa31" />
          </span>
        </div>
      </div>
      <div className={css.CardBtnContainer}>
        <button className={css.CardButton}>
          <div>В корзину</div>
          <CiShoppingCart size={25} />
        </button>
      </div>
    </div>
  );
};
