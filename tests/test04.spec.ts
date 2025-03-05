import { test, expect } from "@playwright/test";

test.use({
  viewport: {
    height: 900,
    width: 1600,
  },
});

test.describe("test functionality of navbar elements", () => {
  test("Required Neural section is not in viewport after clicking on Neural AI in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByText("Neural AI", { exact: true }).click();
    await expect(
      page.getByText("Neural AI OS Neural AI OS -")
    ).not.toBeInViewport();
  });

  test("Required NexaStack section is not in viewport after clicking on NexaStack in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.locator("#headerblock").getByText("NexaStack").click();
    await expect(page.getByText("NexaStack Inference AI")).not.toBeInViewport();
  });

  test("Required ElixirData section is not in viewport after clicking on ElixirData in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.locator("#headerblock").getByText("ElixirData").click();
    await expect(
      page.getByText("ElixirData Decision AI –")
    ).not.toBeInViewport();
  });

  test("Required MetaSecure section is not in viewport after clicking on MetaSecure in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.locator("#headerblock").getByText("MetaSecure").click();
    await expect(
      page.getByText("MetaSecure Manage AI Risk and")
    ).not.toBeInViewport();
  });

  test("Required Akira AI section is not in viewport after clicking on Akira AI in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.locator("#headerblock").getByText("Akira AI").click();
    await expect(
      page.getByText("Akira AI Turn AI in your")
    ).not.toBeInViewport();
  });

  test("Required XAI section is not in viewport after clicking on XAI in navbar", async ({
    page,
  }) => {
    await page.goto("https://www.xenonstack.com/", {
      waitUntil: "domcontentloaded",
    });
    await page.getByText("XAI", { exact: true }).click();
    await expect(
      page.getByText("XenonStack AI Build Visual AI")
    ).not.toBeInViewport();
  });
});
