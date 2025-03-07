import { IconList } from "../../Components/Hero/IconList/IconList";
import { Hero } from "../../Components/Hero/Hero";
import css from "./MainPage.module.css";
export const MainPage = () => {
  return (
    <>
      <div className={`container ${css.mainPageContainer}`}>
        <Hero />
        <IconList />
      </div>
    </>
  );
};
