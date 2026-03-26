import css from "./CenteredContent.module.css";

type CenteredContentProps = {
  children: React.ReactNode;
};

export function CenteredContent({ children }: CenteredContentProps) {
  return (
    <>
      <div className={css.centeredContent}>{children}</div>
    </>
  );
}
