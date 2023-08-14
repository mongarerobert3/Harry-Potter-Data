"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

/**
 * useFetch - fetches data from the Harry Potter API //https://hp-api.onrender.com/
 * @param {string} id 
 * @returns { object } An object containing the fetched data
 */
const useFetch = (id = '') => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let response;
      if (id) {
        response = await axios.get(`https://hp-api.onrender.com/api/character/${id}`);
      } else {
        response = await axios.get('https://hp-api.onrender.com/api/characters');
      }

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
