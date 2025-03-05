import { test, expect } from "playwright/test";

// test.use({
//   viewport: {
//     height: 915,
//     width: 412,
//   },
// });

test.describe("Navbar Visibility", () => {
  test("mobile navbar visibility test", async ({ page }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("img", { name: "Xenonstack Hamburger" }).click();
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
