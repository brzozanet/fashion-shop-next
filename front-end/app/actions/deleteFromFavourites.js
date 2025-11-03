"use server";
export async function deleteFromFavourites(favouriteId) {
  const BACKEND_URL = process.env.BACKEND_URL;

  console.log("backend", BACKEND_URL);
  console.log("favourite ID", favouriteId);

  try {
    const request = await fetch(`${BACKEND_URL}/favourites/${favouriteId}`, {
      method: "DELETE",
    });

    if (!request.ok) {
      throw new Error("Błąd podczas usuwania produktu z ulubionych");
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
