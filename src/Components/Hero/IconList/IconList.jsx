import css from "./IconList.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { IoReorderThree } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
export const IconList = () => {
  return (
    <div className={css.IconMain}>
      <ul className={css.IconConteiner}>
        <li className={css.iconItem}>
          <IoCheckmarkCircleOutline size={35} />
          <h1 className={css.IconTextWright}>
            Гарантія 100% повернення грошових коштів
          </h1>
        </li>
        <li className={css.iconItem}>
          <LiaTruckMovingSolid size={35} />
          <h1 className={css.IconTextWright}>Доставка по Україні</h1>
        </li>
        <li className={css.iconItem}>
          <IoReorderThree size={35} />
          <h1 className={css.IconTextWright}>
            Можливість оформлення замовлення без реєстрації
          </h1>
        </li>
        <li className={css.iconItem}>
          <CiDiscount1 size={35} />
          <h1 className={css.IconTextWright}>Знижки постійним покупцям</h1>
        </li>
      </ul>
    </div>
  );
};
