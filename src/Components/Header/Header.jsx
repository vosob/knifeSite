import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { ToolBar } from "../../Components/ToolBar/ToolBar";
import { MegaMenu } from "../MegaMenu/MegaMenu";

export const Header = () => {
  return (
    <>
      <div className={`container ${css.nav}`}>
        <Link className={css.navItem} to="/about">
          О нас
        </Link>
        <Link className={css.navItem} to="/payment-and-delivery">
          Оплата и доставка
        </Link>
        <Link className={css.navItem} to="/news">
          Новости
        </Link>
        <Link className={css.navItem} to="/contacts">
          Контакты
        </Link>

        <div className={css.personalAccount}>
          <IoPersonOutline size={22} />
          <p>Личный кабинет</p>
        </div>
      </div>
      <div className="container">
        <ToolBar />
      </div>
      <div>
        <MegaMenu />
      </div>
    </>
  );
};
