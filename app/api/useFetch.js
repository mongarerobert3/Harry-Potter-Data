"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false)

	const fetchData = async () => {
		setIsLoading(true);

		try{
			const response = await axios.get('https://hp-api.onrender.com/api/characters')
			setData(response.data)
			console.log(response.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false)
		}
	};

	useEffect(() =>{
		fetchData();
	}, [])

	const refetch = () => {
		fetchData();
	};


	return { data, isLoading, error, refetch}
}

export default useFetch;