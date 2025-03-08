import css from "./Catalog.module.css";
export const Catalog = () => {
  return (
    <div className={css.MainCatalog}>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Каталог ножів</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img
            className={css.Img}
            src="/img/catalog/knife-1493593_960_720 1.png"
            alt=""
          />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Середньоклинкова зброя</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img
            className={css.Img}
            src="/img/catalog/dagger-png-transparent-picture 1.png"
            alt=""
          />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Довгоклинкова зброя</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img className={css.Img} src="/img/catalog/holor048 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Сувенірні вироби</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img className={css.Img} src="/img/catalog/1029762 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Супутні товари</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img
            className={css.Img}
            src="/img/catalog/kupit chehol 1.png"
            alt=""
          />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <div>
          <h1>Ножова майстерня</h1>
          <ul className={css.CatalogList}>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </div>
        <div>
          <img
            className={css.Img}
            src="/img/catalog/damascus-steel-7379530_640.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
