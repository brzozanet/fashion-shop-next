import Link from "next/link";
import css from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <div className={css.notfoundContainer}>
        <img src="/images/error.png" alt="Błąd 404" title="Błąd 404" />
        <h2 className={css.notfoundTitle}>Nie ma takiej strony</h2>
        <Link className={css.notfoundLink} href="/">
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}
