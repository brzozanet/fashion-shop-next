"use server";
export async function addToFavourites(favouriteId: number) {
  const BACKEND_URL = process.env.BACKEND_URL;

  if (!BACKEND_URL) {
    return {
      success: false,
      message: "Brak połączenia z backendem. Sprawdź plik .env",
    };
  }

  try {
    const request = await fetch(`${BACKEND_URL}/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: favouriteId,
      }),
    });

    if (!request.ok) {
      throw new Error("Błąd dodawania do ulubionych");
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Nieznany błąd",
    };
  }
}
