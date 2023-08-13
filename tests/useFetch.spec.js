const axios = require('axios');
const {test, expect} = require('@playwright/test')

test('Use fetch hook tests', () =>{
	let response;

	test.beforeAll(async () =>{
		response = {
			data:[{ id: 1, name: 'Harry'}, {id: 2, name: 'Hermione'}]
		}
	})
})