// NOTE: Normalizuje ścieżki obrazków z db.json do pełnych URL używając BACKEND_URL
// NOTE: Obsługuje zarówno ścieżki z localhost jak i względne ścieżki

export function normalizeImageUrl(
  imagePath: string,
  backendUrl: string
): string {
  // Jeśli już jest pełny URL (z localhost), zamień na backend URL
  if (
    imagePath.startsWith("http://localhost:") ||
    imagePath.startsWith("https://")
  ) {
    // Wyciągnij ścieżkę po domenie (np. /product-photos/...)
    const url = new URL(imagePath);
    return `${backendUrl}${url.pathname}`;
  }

  // Jeśli jest względną ścieżką, dodaj backend URL
  if (imagePath.startsWith("/")) {
    return `${backendUrl}${imagePath}`;
  }

  // Jeśli nie zaczyna się od /, dodaj / na początku
  return `${backendUrl}/${imagePath}`;
}

// NOTE: Normalizuje tablicę ścieżek obrazków

export function normalizePhotos(
  photos: string[],
  backendUrl: string
): string[] {
  // Zabezpieczenie przed wywołaniem z nieprawidłowym typem. Jeśli photos nie jest tablicą,
  // zwracano [] zamiast błędu, niepotrzebne w TypeScript, poniewaz typy sa sprawdzane podczas kompilacji
  // if (!Array.isArray(photos)) {
  //   return [];
  // }

  return photos.map((photo) => normalizeImageUrl(photo, backendUrl));
}
