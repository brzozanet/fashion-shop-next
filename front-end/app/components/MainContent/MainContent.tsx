import css from "./MainContent.module.css";

type MainContentProps = {
  children: React.ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return (
    <>
      <div className={css.mainContent}>{children}</div>
    </>
  );
}
