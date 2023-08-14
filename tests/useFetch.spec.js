const axios = require('axios');
const {test, expect} = require('@playwright/test')

const baseUrl = 'https://hp-api.onrender.com/api/character'
const characterId = '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8';

test.describe.parallel('Response testing', () => {
	test('Assert response status', async ({ request }) => {
		const response = await request.get(`${baseUrl}/${characterId}`);
		expect(response.status()).toBe(200);

		const responseBody = await response.text()
		console.log(responseBody)

		try {
			const jsonData = JSON.parse(responseBody)
			//console.log(jsonData)
		} catch (error) {
			console.log('Error parsing JSON:', error)
		}
	});
	
	//check the response after creating the 404 page
	test('Assert Invalid Endpoint', async ({ request }) => {
		const response = await request.get(`${baseUrl}/non-existing`)
		expect(response.status()).toBe(200)
	})

	
})

test.describe.parallel('ID Details Tests', () => {
	test('Get User Detail', async ({ request }) => {
		const response = await request.get(`${baseUrl}/${characterId}`);
		const responseBody = JSON.parse(await response.text());

		expect(response.status()).toBe(200); 

		expect(responseBody[0].id).toBe(characterId);
		expect(responseBody[0].eyeColour).toBe('green');
		expect(responseBody[0].dateOfBirth).toBe('31-07-1980');
	});	
})

test.describe.parallel('ID testing Itself', () => {
	test('Fetching data without id', async ({ page }) => {
		page.on('request', (request) => {
			if (request.url().includes('/characters')) {
				request.respond({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify(response)
				});
			}
		});
	
		await page.goto(`${baseUrl}`);
	
		const data = await page.evaluate(() => window.__TEST_DATA__);
		expect(data).toEqual(response.data)
	})
	
	
})