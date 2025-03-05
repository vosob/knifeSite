import css from "./Locations.module.css";
import { IoLocationOutline } from "react-icons/io5";

export const Locations = () => {
  return (
    <div className={css.locations}>
      <IoLocationOutline size={28} />
      <p className={css.locationText}>Рівне</p>
    </div>
  );
};
