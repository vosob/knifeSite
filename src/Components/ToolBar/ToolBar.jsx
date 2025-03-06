import { AboutTools } from "./AboutTools/AboutTools";
import { Search } from "./Search/Search";
import { AboutLogo } from "./AboutLogo/AboutLogo";
import css from "./ToolBar.module.css";

export const ToolBar = () => {
  return (
    <div className={css.ToolBar}>
      <AboutLogo />
      <Search />
      <AboutTools />
    </div>
  );
};
