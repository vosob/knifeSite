import css from "./Catalog.module.css";
export const Catalog = () => {
  return (
    <div className={css.Maincatalog}>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Каталог ножів</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img src="/public/img/catalog/knife-1493593_960_720 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Середньоклинкова зброя</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img
            src="/public/img/catalog/dagger-png-transparent-picture 1.png"
            alt=""
          />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Довгоклинкова зброя</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img src="/public/img/catalog/holor048 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Сувенірні вироби</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img src="/public/img/catalog/1029762 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Супутні товари</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img src="/public/img/catalog/kupit chehol 1.png" alt="" />
        </div>
      </div>
      <div className={css.CatalogContainer}>
        <section>
          <h1>Ножова майстерня</h1>
          <ul>
            <li>Роздільні</li>
            <li>Туристичні</li>
            <li>Мисливські</li>
          </ul>
        </section>
        <div className={css.LogoContainer}>
          <img
            src="/public/img/catalog/damascus-steel-7379530_640.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
