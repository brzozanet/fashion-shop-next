"use server";
export async function addToFavourites(favouriteId) {
  const BACKEND_URL = process.env.BACKEND_URL;

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

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
