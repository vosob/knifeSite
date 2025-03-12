import { Catalog } from "../../Components/Catalog/Catalog";
import { IconList } from "../../Components/Hero/IconList/IconList";
import { Hero } from "../../Components/Hero/Hero";
import css from "./MainPage.module.css";
import { TopSales } from "../../Components/TopSales/TopSales";
import { BackgroundForest } from "../../Components/BackgroundForest/BackgroundForest";
import { Article } from "../../Components/Article/Article";

export const MainPage = () => {
  return (
    <>
      <div className={`container ${css.mainPageContainer}`}>
        <Hero />
        <IconList />
        <Catalog />
        <TopSales />
        <BackgroundForest />
        <Article />
      </div>
    </>
  );
};
