import { Basket } from "./Basket/Basket";
import { ToolBarPhone } from "./ToolBarPhone/ToolBarPhone";
import { Locations } from "./Locations/Locations";
import css from "./AboutTools.module.css";

export const AboutTools = () => {
  return (
    <div className={css.AboutToolsContainer}>
      <Locations />
      <ToolBarPhone />
      <Basket />
    </div>
  );
};
