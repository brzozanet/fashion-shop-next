import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3001/kobieta");
  await page.getByRole("link", { name: "Odzież" }).click();
  await page.getByRole("link", { name: "Obuwie arrow" }).click();
  await page.getByRole("link", { name: "Szpilki" }).first().click();
  await page.getByRole("button", { name: "Dodaj do koszyka" }).click();
  await page.getByRole("link", { name: "Koszyk" }).click();
  await page.getByRole("button", { name: "Usuń Usuń z koszyka" }).click();
  await expect(
    page.getByRole("heading", { name: "Twój koszyk jest pusty" })
  ).toBeVisible();
});
