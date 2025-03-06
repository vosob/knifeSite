import css from "./Hero.module.css";
export const Hero = () => {
  return (
    <div className={css.HeroContainer}>
      <div>
        <h1>Інтернет-магазин сертифікованих златоустовських ножів</h1>
        <h2>
          Ласкаво просимо на сайт "ЗЛАТМАКС". В нашому магазині доступний
          найбільш широкий вибір Златоустовських ножів від Златоустовських
          збройних фабрик і компаній, ми є офіційними постачальниками
        </h2>
        <button>Детальніше</button>
      </div>
      {/* права сторона */}
      <div></div>
      {/* IconList */}
    </div>
  );
};
