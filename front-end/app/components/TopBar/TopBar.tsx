import css from "./TopBar.module.css";

type TopBarProps = {
  children: React.ReactNode;
};

export function TopBar({ children }: TopBarProps) {
  return (
    <>
      <div className={css.topBar}>{children}</div>
    </>
  );
}
