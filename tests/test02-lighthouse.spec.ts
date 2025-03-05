import { playAudit } from "playwright-lighthouse";
import { chromium, test } from "@playwright/test";
import lighthouseDesktopConfig from "lighthouse/core/config/lr-desktop-config";

test.describe("Performance Test", () => {
  test("Lighthouse Performance test", async () => {
    const browser = await chromium.launch({
      args: ["--remote-debugging-port=9222"],
    });
    const page = await browser.newPage();
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await playAudit({
      page: page,
      config: lighthouseDesktopConfig,
      thresholds: {
        performance: 50,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
      },
      port: 9222,
      reports: {
        formats: {
          html: true,
        },
        name: `lighthouse-${new Date().toISOString()}`,
        directory: `${process.cwd()}/lighthouse`,
      },
    });
    await page.close();
  });
});
