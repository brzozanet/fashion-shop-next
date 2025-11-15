import css from "./Button.module.css";

type ButtonProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <div className={css.button} onClick={onClick}>
        {children}
      </div>
    </>
  );
}
