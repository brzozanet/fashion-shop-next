import Link from "next/link";

// INFO: Używamy inline styles zamiast CSS Modules, aby zapobiec preloadowaniu CSS przez Next.js

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "4rem auto",
};

const titleStyle = {
  marginBottom: "1rem",
};

const linkStyle = {
  cursor: "pointer",
  backgroundColor: "var(--color-theme-main)",
  color: "var(--color-white)",
  fontWeight: "bold",
  textTransform: "uppercase",
  padding: "1rem",
};

export default function NotFound() {
  return (
    <>
      <div style={containerStyle}>
        <img
          src="/images/error.png"
          alt="Błąd 404"
          title="Błąd 404"
          loading="lazy"
        />
        <h2 style={titleStyle}>Nie ma takiej strony</h2>
        <Link style={linkStyle} href="/">
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}
