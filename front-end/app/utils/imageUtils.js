// INFO: Normalizuje ścieżki obrazków z db.json do pełnych URL używając BACKEND_URL
// INFO: Obsługuje zarówno ścieżki z localhost jak i względne ścieżki

/**
 * @param {string} imagePath - Ścieżka obrazka z db.json (może być localhost lub względna)
 * @param {string} backendUrl - URL backendu (z BACKEND_URL)
 * @returns {string} - Pełny URL obrazka
 */

export function normalizeImageUrl(imagePath, backendUrl) {
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

/**
 * Normalizuje tablicę ścieżek obrazków
 *
 * @param {string[]} photos - Tablica ścieżek obrazków
 * @param {string} backendUrl - URL backendu
 * @returns {string[]} - Tablica znormalizowanych URL
 */

export function normalizePhotos(photos, backendUrl) {
  if (!Array.isArray(photos)) {
    return [];
  }
  return photos.map((photo) => normalizeImageUrl(photo, backendUrl));
}
