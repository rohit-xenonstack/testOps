import { test, expect } from "@playwright/test";

test.describe("XenonStack Website Tests", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://xenonstack.com", {
      waitUntil: "domcontentloaded",
    });
    await expect(
      page.getByRole("heading", { name: "Build Agentic Systems for" })
    ).toBeVisible();
  });

  test("button to akira.ai", async ({ page }) => {
    await page.goto("https://xenonstack.com", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("button", { name: "Discover Now" }).click();
    await expect(
      page.getByRole("heading", {
        name: "Deep Learning and AI Experiment Platform",
      })
    ).toBeVisible();
  });

  test("capture screenshot", async ({ page }) => {
    await page.goto("https://xenonstack.com", {
      waitUntil: "domcontentloaded",
    });
    await page.screenshot({ path: "xenonstack-passed.png", fullPage: true });
  });
});
