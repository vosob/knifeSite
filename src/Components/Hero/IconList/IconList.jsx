import css from "./IconList.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { IoReorderThree } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";

const icons = [
  {
    icon: <IoCheckmarkCircleOutline />,
    text: "Гарантія 100% повернення коштів",
  },
  {
    icon: <LiaTruckMovingSolid />,
    text: "Доставка по Україні",
  },
  {
    icon: <IoReorderThree />,
    text: "Оформлення без реєстрації",
  },
  {
    icon: <CiDiscount1 />,
    text: "Знижки постійним покупцям",
  },
];

export const IconList = () => {
  return (
    <div className={css.iconMain}>
      <ul className={css.iconContainer}>
        {icons.map(({ icon, text }, index) => (
          <li key={index} className={css.iconListItem}>
            <div className={css.icon}>{icon}</div>
            <h3 className={css.iconText}>{text}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
