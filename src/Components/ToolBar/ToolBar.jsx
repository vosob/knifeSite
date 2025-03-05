import { AboutTools } from "./AboutTools/AboutTools";
import { Search } from "./Search/Search";
import { AboutLogo } from "./AboutLogo/AboutLogo";
import css from "./ToolBar.module.css";
import { Link } from "react-router-dom";

export const ToolBar = () => {
  return (
    <Link to={"/"} className={css.ToolBar}>
      <AboutLogo />
      <Search />
      <AboutTools />
    </Link>
  );
};
