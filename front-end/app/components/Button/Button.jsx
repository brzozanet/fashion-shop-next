import css from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <>
      <div className={css.button} onClick={onClick}>
        {children}
      </div>
    </>
  );
}
