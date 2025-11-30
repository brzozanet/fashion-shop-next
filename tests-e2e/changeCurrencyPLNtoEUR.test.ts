import { test, expect } from "@playwright/test";

test("Change currency PLN to EUR", async ({ page }) => {
  await page.goto("http://localhost:3001");
  await page.goto("http://localhost:3001/kobieta");

  await expect(page.getByRole("combobox")).toHaveValue("PLN");
  await expect(
    page.getByRole("link", { name: "Szpilki klasyczne 249 PLN" })
  ).toBeVisible();

  await page.getByRole("combobox").selectOption("EUR");

  await expect(page.getByRole("combobox")).toHaveValue("EUR");
  await expect(
    page.getByRole("link", { name: "Szpilki klasyczne 59 EUR" })
  ).toBeVisible();

  await page.reload();

  await expect(page.getByRole("combobox")).toHaveValue("EUR");
  await expect(
    page.getByRole("link", { name: "Szpilki klasyczne 59 EUR" })
  ).toBeVisible();
});
