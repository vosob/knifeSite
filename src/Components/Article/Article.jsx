import css from "./Article.module.css";
export const Article = () => {
  return (
    <div className={css.articleContainer}>
      <h1 className={css.wrightHead}>Наші статті</h1>

      <div className={css.articleHead}>
        <div className={css.articlePicture}>
          <img src="/img/Article/Rectangle 42.png" alt="" />
          <h2 className={css.wrightDetail}>Як правильно вибрати ніж</h2>
          <div className={css.articleSchedule}>
            <span>24.07.2019</span>
          </div>
        </div>

        <div className={css.articlePicture}>
          <img src="/img/Article/Rectangle 43.png" alt="" />
          <h2 className={css.wrightDetail}>Як правильно вибрати ліхтар</h2>
          <div className={css.articleSchedule}>
            <span>24.07.2019</span>
          </div>
        </div>
        <div className={css.articlePicture}>
          <img src="/img/Article/Rectangle 44.png" alt="" />
          <h2 className={css.wrightDetail}>Кухонні ножі для господинь</h2>
          <div className={css.articleSchedule}>
            <span>24.07.2019</span>
          </div>
        </div>
        <div className={css.articlePicture}>
          <img src="/img/Article/Rectangle 45.png" alt="" />
          <h2 className={css.wrightDetail}>Кухонні ножі для господинь</h2>
          <div className={css.articleSchedule}>
            <span>24.07.2019</span>
          </div>
        </div>
      </div>
    </div>
  );
};
