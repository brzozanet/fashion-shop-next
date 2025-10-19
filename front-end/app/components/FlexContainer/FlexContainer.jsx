import css from "./FlexContainer.module.css";

export function FlexContainer({ children }) {
  return (
    <>
      <div className={css.flexContainer}>{children}</div>
    </>
  );
}
