'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import useFetch from '@app/api/useFetch';

const CharacterPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const { data, isLoading, error } = useFetch(id);
  
  if (isLoading) {
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full border-t-2 border-blue-500 border-solid h-16 w-16"></div>
    </div>
  }

  if (error) {
    return <div className="text-center py-8">Error: {error}</div>;
  }

  console.log('this is the data', data);

  const character = data[0];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {character ? (
        <div className="flex max-w-3xl p-8 bg-white rounded shadow">
          <div className="flex-shrink-0">
            <img
              src={character.image}
              alt={character.name}
              className="w-48 h-auto rounded-lg"
            />
          </div>
          <div className="ml-8">
            <h1 className="char-name text-2xl font-bold mb-2">{character.name}</h1>
            <p className="text-gray-600">Species: {character.species}</p>
            <p className="text-gray-600">Gender: {character.gender}</p>
            <p className="text-gray-600">House: {character.house}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CharacterPage;

