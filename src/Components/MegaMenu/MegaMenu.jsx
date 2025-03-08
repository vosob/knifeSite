import css from "./MegaMenu.module.css";

const menuItems = [
  {
    title: "Каталог ножів",
    catalog: ["Знижки", "Новинки", "Ножі", "Точила", "Мультитули"],
  },
  {
    title: "Клинкова зброя",
    catalog: ["Мечі", "Кинжали", "Шаблі", "Кортики"],
  },
  {
    title: "Сувенірні вироби",
    catalog: ["Подарункові набори", "Гравірування", "Статуетки"],
  },
  {
    title: "Фонарі ARMYTEK",
    catalog: ["Ліхтарі", "Аксесуари", "Зарядні пристрої"],
  },
  {
    title: "Супутні товари",
    catalog: ["Чохли", "Масла для догляду", "Серветки"],
  },
];

export const MegaMenu = () => {
  return (
    <div className={css.linksContainer}>
      {menuItems.map((menu, index) => (
        <div key={index} className={css.linkWrapper}>
          <div className={css.links}>{menu.title}</div>
          <div className={css.dropdown}>
            <ul>
              {menu.catalog.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
