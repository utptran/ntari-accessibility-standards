import { test, expect } from "@playwright/test";
/**
 * @summary
 * Tests if a page has a non-empty title tag, and allows the tester
 * to interpret if the title corresponds to content on the page.
 *
 * This test makes it easier to get the title when it may be too long
 * and become cut off due to the nature of browser tab names having
 * overflow: none (my own guess).
 *
 * Human interpretation is needed to summarize overall content of a page to
 * an appropriate title substring.
 *
 * Success Criterion
 * @link https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html
 *
 * Test Rules
 *
 * 1. HTML page has non-empty title
 * @link https://www.w3.org/WAI/standards-guidelines/act/rules/2779a5/
 * 2. HTML page title is descriptive
 * @link https://www.w3.org/WAI/standards-guidelines/act/rules/c4a8a4/
 */

// Set page as locator for assertion, expectation, and test info report.
const PAGE = "week3/incorrect-title-page.html";

test("has title", async ({ page }, testInfo) => {
  await page.goto(PAGE);

  // Assertion that checks the page to have the given title of any character (not empty).
  await expect(page).toHaveTitle(/.+/);

  // Create a report to match title to content on-page.
  const title = await page.title();
  const bodyText = await page.locator("body").innerText();

  await testInfo.attach("title-vs-content", {
    body: `INSTRUCTIONS: Under 2.4.2 Page Titled, view the TITLE and PAGE CONTENT to determine whether the TITLE accurately describes the purpose or content of the document.\n\nTITLE: ${title}\n\nPAGE CONTENT:\n${bodyText}`,
    contentType: "text/plain",
  });
});
