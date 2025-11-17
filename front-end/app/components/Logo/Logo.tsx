import Link from "next/link";
import css from "./Logo.module.css";

export function Logo() {
  return (
    <>
      <div className={css.logo}>
        <Link href="/">
          <img
            src="/images/logo_fashion_shop.png"
            height="55"
            alt=""
            title=""
          />
        </Link>
      </div>
      {/* <h1 className={css.logoText}>React Shop Online®</h1> */}
    </>
  );
}
