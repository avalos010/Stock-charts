import { test, expect } from "@playwright/test";

test.describe("auto complete", () => {
  test("Typing in input returns results under input", async ({ page }) => {
    await page.goto("/");
    const inputBox = page.locator("input[type=text]");
    await expect(inputBox).toBeVisible();
    await inputBox.fill("goog");
    const autoCompletionContainer = page.locator(".list-group");
    await expect(autoCompletionContainer).toBeVisible();
  });
});
