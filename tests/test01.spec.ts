import { test, TestInfo, Page } from "@playwright/test";

test.describe("Home Page Loading test", () => {
  test("time to completely render dom content", async ({ page }, TestInfo) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await measurePerformance(page, TestInfo);
  });
  test("time to completely load all resorces", async ({ page }, TestInfo) => {
    test.setTimeout(90_000);
    await page.goto("/", {
      waitUntil: "networkidle",
    });
    await measurePerformance(page, TestInfo);
  });
});

async function measurePerformance(page: Page, TestInfo: TestInfo) {
  // Use Performance API to measure performance
  // https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
  const [performanceTiming] = await page.evaluate(() => {
    const [timing] = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    return [timing];
  });
  // Get the start to load event end time
  const startToLoadEventEnd =
    performanceTiming.loadEventEnd - performanceTiming.startTime;
  // Add the performance annotation to the HTML report
  test.info().annotations.push({
    type: "Performance",
    description: `"${TestInfo.project.name}" - Navigation start to load event end: ${startToLoadEventEnd}ms`,
  });
}
