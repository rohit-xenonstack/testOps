import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage accessibility test", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }, testInfo) => {
    await page.goto("/", {
      waitUntil: "load",
    });
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    await testInfo.attach("accessibility-scan-results", {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: "application/json",
    });
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
