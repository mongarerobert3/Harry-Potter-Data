'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import useFetch from '@app/api/useFetch';
//import { Loading } from '@components';

/**
 * Displays individual character
 * Gets character from url where id is a parameter
 * @returns - the fetched data of a character from the Harry Potter API
 */

const CharacterPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const { data, error } = useFetch(id);
  
  /**if (isLoading) {
    return <Loading />;
  }**/

  if (error) {
    return <div className="text-center py-8">Error: {error}</div>;
  }

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
            {character.alternate_names && character.alternate_names.length > 0 && (
              <p className="char-alt-name text-gray-600">
              Alternate Names: {character.alternate_names.join(", ")}
            </p>
            )}
            <p className="char-dob text-gray-600">D.O.B: {character.dateOfBirth}</p>
            <p className="char-yob text-gray-600">Y.O.B: {character.yearOfBirth}</p>
            <p className="char-wizard text-gray-600">Wizard:{character.wizard.toString()}</p>
            <p className="char-species text-gray-600">Species: {character.species}</p>
            <p className="char-gender text-gray-600">Gender: {character.gender}</p>
            <p className="char-house text-gray-600">House: {character.house}</p>
            <p className="char-ancestry text-gray-600">Ancestry: {character.ancestry}</p>
            <p className="char-eyeColour text-gray-600">Eye Colour: {character.eyeColour}</p>
            <p className="char-hairColour text-gray-600">Hair Colour: {character.hairColour}</p>

          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CharacterPage;
