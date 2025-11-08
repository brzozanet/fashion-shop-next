"use client";
import Link from "next/link";
import css from "./page.module.css";

export default function Error({ error, reset }) {
  // INFO: not working, because not-found must be a server component
  // const router = useRouter();

  return (
    <>
      <div className={css.errorContainer}>
        <img src="/images/error.png" alt="Błąd 404" title="Błąd 404" />
        <h2 className={css.errorTitle}>Coś poszło nie tak 🥺</h2>
        <button onClick={() => reset()}>Spróbuj ponownie</button>
        <Link className={css.errorLink} href="/">
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}
