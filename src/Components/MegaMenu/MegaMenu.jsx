import css from "./MegaMenu.module.css";

const controls = [
  "Каталог ножей",
  "Клинковое оружие",
  "Сувенирные изделия",
  "Фонари ARMYTEK",
  "Сопуствующие товары",
];

export const MegaMenu = () => {
  return (
    <div className={css.linksContainer}>
      {controls.map((item) => (
        <div className={css.links}>{item}</div>
      ))}
    </div>
  );
};
