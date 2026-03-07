import css from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={css.footer}>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://brzoza.net"
            target="_blank"
            rel="noreferrer noopener"
            className={css.footerLink}
          >
            brzoza.net
          </a>
        </p>
      </div>
    </>
  );
}
