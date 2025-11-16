import css from "./FullWidthButton.module.css";

type FullWidthButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export function FullWidthButton({
  children,
  onClick,
  disabled,
  ...props
}: FullWidthButtonProps) {
  return (
    <>
      <button
        className={`${css.fullWidthButton} ${disabled ? css.disabled : ""}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
