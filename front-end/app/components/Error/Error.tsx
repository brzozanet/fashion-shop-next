import Link from "next/link";
import css from "./Error.module.css";

export default function Error() {
  return (
    <>
      <div className={css.errorContainer}>
        <img src="/images/error.png" alt="Błąd" title="Błąd" loading="lazy" />
        <h2 className={css.errorTitle}>Coś poszło nie tak</h2>
        <Link className={css.errorLink} href="/">
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}
