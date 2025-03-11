import { Card } from "../Card/Card";
import css from "./TopSales.module.css";

export const TopSales = () => {
  return (
    <div>
      <h1 className={css.SalesAd}>Хіти продажів</h1>
      <div className={css.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
