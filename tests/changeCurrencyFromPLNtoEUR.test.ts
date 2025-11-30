import { test, expect } from "@playwright/test";

test("Change currency from PLN to EUR", async ({ page }) => {
  await page.goto("http://localhost:3001");
  await page.goto("http://localhost:3001/kobieta");
  // const selectedCurrency = page.getByRole("combobox");
  await expect(page.getByRole("combobox")).toHaveValue("PLN");
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
