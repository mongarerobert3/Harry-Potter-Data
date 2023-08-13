'use client';

import React from 'react';
import {Cards} from '../components'
import { Character } from '@common.types';
import { useFetch } from '@app/api';

const CharactersCard = () => {
	const { data, isLoading, error } = useFetch();

  if (isLoading) {
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full border-t-2 border-blue-500 border-solid h-16 w-16"></div>
    </div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item: Character, index) => (
        <Cards key={index} item={item} />
      ))}
    </div>
  );
};

export default CharactersCard;
