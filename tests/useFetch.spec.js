const axios = require('axios');
const {test, expect} = require('@playwright/test')
const fetch = require('node-fetch');

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

test.describe.parallel('ID Tests', () => {
	test('Get User Detail,fetch Data with a valid id', async ({ request }) => {
		const response = await request.get(`${baseUrl}/${characterId}`);
		const responseBody = JSON.parse(await response.text());

		expect(response.status()).toBe(200); 

		expect(responseBody[0].id).toBe(characterId);
		expect(responseBody[0].eyeColour).toBe('green');
		expect(responseBody[0].dateOfBirth).toBe('31-07-1980');
	});	

	test('Fetching all the data', async ({ request }) => {
		const response = await request.get(`${baseUrl}/${characterId}`);
		const responseBody = JSON.parse(await response.text());

		expect(response.status()).toBe(200); 
	});

	test('Querying with a wrong ID', async ({ page }) => {
    const wrongCharacterId = '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a9';

    page.on('requestfailed', (request) => {
        if (request.url().includes(`/character/${wrongCharacterId}`)) {
            expect(request.failure().errorText).toContain('Cannot GET /api/characters/');
        }
    });

    await page.goto(`${baseUrl}/character/${wrongCharacterId}`);
	});

	test('Concurrent API Requests', async () => {
    const numConcurrentRequests = 10; 
    const endpoint = `${baseUrl}/character`;

    // Create an array of promises for concurrent requests
    const requestPromises = Array.from({ length: numConcurrentRequests }, async () => {
			const response = await fetch(endpoint);
			return response;
    });

    // Execute concurrent requests using Promise.all()
    const responses = await Promise.all(requestPromises);

    // Check if all responses have status 200
    responses.forEach(response => {
        expect(response.status).toBe(200);
    });
	});
})

