import Link from "next/link";
import css from "./not-found.module.css";

export default function NotFound() {
  // INFO: not working, because not-found must be a server component
  // const router = useRouter();

  return (
    <>
      <div className={css.notFoundContainer}>
        <img src="/images/error.png" alt="Błąd 404" title="Błąd 404" />
        <h2 className={css.notFoundTitle}>Nie ma takiej strony</h2>
        <Link className={css.notFoundLink} href="/">
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}
