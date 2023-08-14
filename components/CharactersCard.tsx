'use client';

import React from 'react';
import { Cards, Loading } from '../components';
import { Character } from '@common.types';
import { useFetch } from '@app/api';

const CharactersCard = () => {
  const { data, error } = useFetch();

  /**if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-2">
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }**/

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

