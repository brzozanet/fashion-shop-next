import css from "./FlexContainer.module.css";

type FlexContainerProps = {
  children: React.ReactNode;
};

export function FlexContainer({ children }: FlexContainerProps) {
  return (
    <>
      <div className={css.flexContainer}>{children}</div>
    </>
  );
}
