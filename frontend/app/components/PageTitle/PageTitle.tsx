import css from "./PageTitle.module.css";

type PageTitleProps = {
  children: React.ReactNode;
};

export function PageTitle({ children }: PageTitleProps) {
  return (
    <>
      <h2 className={css.pageTitle}>{children}</h2>
    </>
  );
}
