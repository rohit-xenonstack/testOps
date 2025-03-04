// Performance testing specs such as loading times and Google Lighthouse scores

import { test, expect, TestInfo, Page } from "@playwright/test";

test("time to completely render dom content of home page", async ({
  page,
}, TestInfo) => {
  await page.goto("https://www.xenonstack.com/", {
    waitUntil: "domcontentloaded",
  });
  await measurePerformance(page, TestInfo);
  await page.screenshot({
    path: "xenonstack-passed-domcontent.png",
    fullPage: true,
  });
});

test("time to completely load all resorces of home page", async ({
  page,
}, TestInfo) => {
  test.setTimeout(90_000);
  await page.goto("https://www.xenonstack.com/", {
    waitUntil: "networkidle",
  });
  await measurePerformance(page, TestInfo);
  await page.screenshot({
    path: "xenonstack-passed-networkidle.png",
    fullPage: true,
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
