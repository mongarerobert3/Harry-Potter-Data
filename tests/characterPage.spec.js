const { test, expect } = require('@playwright/test');

test('Character Page Test', async ({ page }) => {
  await page.goto('http://localhost:3000/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8');

  // Test loading state
  await page.waitForSelector('.animate-spin');

  // Test data display
  await page.waitForSelector('.char-name');
  const characterName = await page.textContent('.char-name');
  expect(characterName).toBe('Harry Potter'); 

});
