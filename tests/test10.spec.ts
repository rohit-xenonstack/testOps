import { test, expect, Page } from "@playwright/test";

async function getAllLinksFromPage(page: Page) {
  const links = page.getByRole("link");
  const allLinks = await links.all();
  const allLinkHrefs = await Promise.all(
    allLinks.map((link) => link.getAttribute("href"))
  );
  const validHrefs = allLinkHrefs.reduce((links, link) => {
    expect.soft(link, "link has no a proper href").not.toBeFalsy();
    if (link && !link?.startsWith("mailto:") && !link?.startsWith("#"))
      links.add(new URL(link, page.url()).href);
    return links;
  }, new Set<string>());
  return validHrefs;
}

test.describe("No 404s on Checkly pages", () => {
  test(`The docs have no 404s`, async ({ page }, testInfo) => {
    await page.goto("/");
    const linkUrls = await getAllLinksFromPage(page);

    for (const url of linkUrls) {
      await test.step(`Checking link: ${url}`, async () => {
        try {
          const response = await page.request.get(url);
          expect
            .soft(response.ok(), `${url} has no green status code`)
            .toBeTruthy();
        } catch {
          expect.soft(null, `${url} has no green status code`).toBeTruthy();
        }
      });
    }

    testInfo.attach("checked-links.txt", {
      body: Array.from(linkUrls).join("\n"),
    });
  });
});
