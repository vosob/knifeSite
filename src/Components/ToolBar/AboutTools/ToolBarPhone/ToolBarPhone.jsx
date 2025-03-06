import css from "./ToolBarPhone.module.css";

export const ToolBarPhone = () => {
  return (
    <div className={css.toolbarContainer}>
      <span className={css.toolText}>8-800-777-49-67</span>

      <span className={css.toolWright}>Отримати дзвінок</span>
    </div>
  );
};
