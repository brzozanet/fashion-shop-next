"use client";
import { useRouter } from "next/navigation";
import { Button } from "./components/Button/Button";
import { CenteredContent } from "./components/CenteredContent/CenteredContent";
import css from "./page.module.css";

export default function NotFound() {
  const router = useRouter();

  const handleBackToHomeButton = () => {
    router.push("/");
  };

  return (
    <>
      <CenteredContent>
        <div className={css.notFoundContainer}>
          <img src="/images/error.png" alt="Błąd 404" title="Błąd 404" />
          <h2 className={css.notFoundTitle}>Nie ma takiej strony</h2>
          <Button onClick={handleBackToHomeButton}>
            Wróć do strony głównej
          </Button>
        </div>
      </CenteredContent>
    </>
  );
}
