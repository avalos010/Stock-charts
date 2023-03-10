import { test, expect } from "@playwright/test";

test.describe("charts", () => {
  test("chart shows up when we go to a specific symbol url", async ({
    page,
  }) => {
    await page.goto("/chart/MET");
    const chartContainer = page.locator(".highcharts-container ");
    await expect(chartContainer).toBeVisible();
  });

  test("when selecting a symbol take us to specific URL", async ({ page }) => {
    await page.goto("/");
    const inputBox = page.locator("input[type=text]");
    inputBox.fill("googl");
    const viewChartBtn = page.locator(".list-group .d-flex .btn");
    await viewChartBtn.click();

    await expect(page).toHaveURL("/chart/GOOGL");
  });

  test("saving a chart displays it under saved", async ({ page }) => {
    await page.goto("/chart/MET");
    const saveButton = page.locator("button", { hasText: "Add to Saved" });
    const savedChartsLink = page.locator("a", { hasText: "Saved Charts" });
    await page.locator(".highcharts-container").waitFor();
    await saveButton.click();
    await savedChartsLink.click();
    const chartTitle = page.locator(".highcharts-title");
    await expect(chartTitle).toHaveText("MET");
  });

  test("if no data is returned for a chart show alert", async ({ page }) => {
    await page.goto("/chart/null");
    const alert = page.locator(".alert-danger");
    await alert.waitFor();
    await expect(alert).toHaveText(
      "No Data available you will be redirected in a few seconds..."
    );
    const input = page.locator("input[type=text]");
    await input.waitFor();
    await expect(page).toHaveURL("/");
  });
});
