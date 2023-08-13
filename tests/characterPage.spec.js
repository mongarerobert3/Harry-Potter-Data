const { test, expect } = require('@playwright/test');

test('Character Page Test', async ({ page }) => {
  await page.goto('http://localhost:3000/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8');
  await page.waitForSelector('.char-name')

  const characterName = await page.textContent('.char-name');
  const species = await page.textContent('char-species:has-text("Species:")');
  const gender = await page.textContent('.char-gender:has-text("Gender:")');
  const house = await page.textContent('.char-house:has-text("House:")');
  const image = await page.getAttribute('img', 'src');

  expect(characterName).toContain('Harry Potter');
  expect(species).toContain('Species: human');
  expect(gender).toContain('Gender: male');
  expect(house).toContain('House: Gryffindor');
  expect(image).toContain('https://ik.imagekit.io/hpapi/harry.jpg');
});

test('Character page to display loader spinner while waiting data', async({ page }) => {
  await page.goto('http://localhost:3000/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8');
  await page.waitForSelector('animate-spin');
});

/***By codeGen ***/
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('heading', { name: 'Harry Porter Characters' }).click();
  await page.getByPlaceholder('Search Name, House...').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search Name, House...').click();
  await page.locator('div').filter({ hasText: 'Name: Hermione GrangerD.O.B: 19-09-1979Read more' }).nth(1).click();
  await page.getByPlaceholder('Search Name, House...').click();
  await page.getByPlaceholder('Search Name, House...').fill('Harry');
  await page.getByPlaceholder('Search Name, House...').click();
  await page.locator('section').filter({ hasText: /^SearchSearchName: Harry PotterD\.O\.B: 31-07-1980Read more$/ }).locator('img').click();
  await page.locator('section').filter({ hasText: /^SearchSearchName: Harry PotterD\.O\.B: 31-07-1980Read more$/ }).getByRole('heading').click();
  await page.locator('section').filter({ hasText: /^SearchSearchName: Harry PotterD\.O\.B: 31-07-1980Read more$/ }).getByRole('paragraph').click();
  await page.locator('section').filter({ hasText: /^SearchSearchName: Harry PotterD\.O\.B: 31-07-1980Read more$/ }).getByRole('paragraph').click();
  await page.getByText('Name: Harry PotterD.O.B: 31-07-1980Read more').first().click();
  await page.locator('section').filter({ hasText: /^SearchSearchName: Harry PotterD\.O\.B: 31-07-1980Read more$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: 'Name: Harry PotterD.O.B: 31-07-1980Read more' }).nth(1).click();
  await page.getByPlaceholder('Search Name, House...').click();
  await page.locator('.mx-2 > .my-2').first().click();
  await page.getByRole('heading', { name: 'Harry Porter Characters' }).click();
  await page.locator('div').first().click();
  await page.getByRole('img', { name: 'Harry Potter' }).click();
  await page.locator('div').nth(1).click();
  await page.getByRole('heading', { name: 'Harry Potter' }).click();
  await page.getByText('Alternate Names: The Boy Who Lived, The Chosen One').click();
  await page.getByText('D.O.B: 31-07-1980').click();
  await page.getByText('Y.O.B: 1980').click();
  await page.getByText('Wizard:true').click();
  await page.getByText('Species: human').click();
  await page.getByText('Gender: male').click();
  await page.getByText('House: Gryffindor').click();
  await page.getByText('Ancestry: half-blood').click();
  await page.getByText('Eye Colour: green').click();
  await page.getByText('Hair Colour: black').click();
});