import { test, expect } from "@playwright/test";

test("Change currency from PLN to USD", async ({ page }) => {
  await page.goto("http:localhost:3001");
  await page.goto("http:localhost:3001/kobieta");
});
