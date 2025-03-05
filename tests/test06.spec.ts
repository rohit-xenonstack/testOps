import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test.describe("test working of homepage buttons", () => {
  test("test Akira AI explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-one")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Bringing Agentic AI into" })
    ).toBeVisible();
  });

  test("test Elixir Data explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-two")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Data mesh for Augmented" })
    ).toBeVisible();
  });

  test("test Xenonstack AI explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-three")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Autonomous Operations Powered" })
    ).toBeVisible();
  });

  test("test NexaStack explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-four")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Agentic Infrastructure Toggle" })
    ).toBeVisible();
  });

  test("test MetaSecure explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-five")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Autonomous SoC with" })
    ).toBeVisible();
  });

  test("test Neural AI explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#product-main-section-six")
      .getByRole("link", { name: "Explore Further button-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Accelerate, Optimize and" })
    ).toBeVisible();
  });

  test("test XAI Bootcamp explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    // await page
    //   .getByText(
    //     "Augment Data and Analytics WorkFlows with Agentic AI Real Time, Dynamic"
    //   )
    //   .click();
    await page
      .locator("section")
      .filter({ hasText: "XAI Bootcamps XenonStack XAI" })
      .getByRole("link")
      .click();
    await expect(
      page.getByRole("heading", { name: "XenonStack Academy for Data" })
    ).toBeVisible();
  });

  test("test Cloud FinOps explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("section")
      .filter({ hasText: "Cloud FinOps for AI" })
      .getByRole("link")
      .click();
    await expect(
      page.getByRole("heading", { name: "Harnessing Gen AI For" })
    ).toBeVisible();
  });

  test("test Xenon Academy explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .getByRole("link", { name: "Join Us Today blue-cta-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Building People and Ecosystem" })
    ).toBeVisible();
  });

  test("test Tech Blogs explore button", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .getByRole("link", { name: "Explore Blogs blue-cta-arrow" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Technology Blogs" })
    ).toBeVisible();
  });

  test("test Aerospace card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("link", { name: "aerospace-and-aviation" }).click();
    await expect(
      page.getByRole("heading", {
        name: "Aerospace and Defense solutions- Upcoming developments and Future Trends",
      })
    ).toBeVisible();
  });

  test("test Automotive Manufacturing card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("link", { name: "automotive-and-industrial" }).click();
    await expect(
      page.getByRole("heading", { name: "Digital Manufacturing and" })
    ).toBeVisible();
  });

  test("test Supply Chain card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("link", { name: "supply-chain Supply Chain" }).click();
    await expect(
      page.getByRole("heading", { name: "Digital Retail Management and" })
    ).toBeVisible();
  });

  test("test Enterprise Technology card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByRole("link", { name: "technology Technology" }).click();
    await expect(
      page.getByRole("heading", { name: "Leading Enterprise Technology" })
    ).toBeVisible();
  });

  test("test Financial Services card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .getByRole("link", { name: "financial-services Financial" })
      .click();
    await expect(
      page.getByRole("heading", {
        name: "Banking and Financial Technology Solutions",
      })
    ).toBeVisible();
  });

  test("test Consumer tech card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .getByRole("link", { name: "consumer-tech Consumer Tech" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Consumer Technology Services" })
    ).toBeVisible();
  });

  test("test Hospitatility card", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .getByRole("link", { name: "hospitality-and-tourism" })
      .dblclick();
    await expect(
      page.getByRole("heading", {
        name: "Travel and Hospitality Technology Services",
      })
    ).toBeVisible();
  });
});
