import css from "./Search.module.css";
import { SlMagnifier } from "react-icons/sl";

export const Search = () => {
  return (
    <div className={css.container}>
      <label htmlFor="search"></label>
      <div className={css.test}>
        <SlMagnifier className={css.icon} size={15} />
        <input
          className={css.input}
          id="search"
          placeholder="Пошук"
          type="text"
        />
      </div>
    </div>
  );
};
