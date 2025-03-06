import css from "./Basket.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const Basket = () => {
  return (
    <div className={css.cartContainer}>
      <FaRegHeart size={35} />
      <FiShoppingCart size={35} />
      <img src="./public/img/Group.png" alt="" width={15} height={15} />
      <div className={css.lastcart}>
        <p className={css.nameMoney}>0 uah</p>
        <p className={css.wrightOrder}>Оформити замовлення</p>
      </div>
    </div>
  );
};
