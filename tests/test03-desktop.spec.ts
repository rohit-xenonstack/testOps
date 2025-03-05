import { test, expect } from "@playwright/test";

// test whether all navabr elements are visible in Desktop view

test.use({
  viewport: {
    height: 900,
    width: 1600,
  },
});

test.describe("Navbar Visibility", () => {
  test("desktop navbar visibility test", async ({ page }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await expect(page.getByText("Foundry", { exact: true })).toBeVisible();
    await expect(page.getByText("Neural AI", { exact: true })).toBeVisible();
    await expect(
      page.locator("#headerblock").getByText("NexaStack")
    ).toBeVisible();
    await expect(
      page.locator("#headerblock").getByText("ElixirData")
    ).toBeVisible();
    await expect(
      page.locator("#headerblock").getByText("MetaSecure")
    ).toBeVisible();
    await expect(
      page.locator("#headerblock").getByText("Akira AI")
    ).toBeVisible();
    await expect(page.getByText("XAI", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("navigation").locator("div").nth(3)
    ).toBeVisible();
    await expect(page.getByRole("navigation")).toContainText("Get Started");
  });
});
