'use client';

import React from 'react';
import { Cards, Loading } from '../components';
import { Character } from '@common.types';
import { useFetch } from '@app/api';

const CharactersCard = () => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export default CharactersCard;

