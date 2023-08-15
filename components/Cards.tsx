'use client'

import React, { useState, useEffect } from 'react';
import { useFetch } from '@app/api';
import {Card} from './../components'

interface Character {
  id: string;
  image: string;
  name: string;
  dateOfBirth: string;
}

const Cards: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const { data: fetchedData, error } = useFetch();

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  const staticCards = Array.from({ length: 4 }, (_, index) => (
    <Card
      key={index}
      item={{
        id: '',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NtlX1xnmpCVssKBag3XPNAHaFj%26pid%3DApi%26h%3D160&f=1&ipt=af49d9073132d4240e2a4aaf0fb86738cf455f85cdab6b118249ce181eac6e7f&ipo=images',
        name: 'Loading',
        dateOfBirth: 'Loading',
      }}
    />
  ));

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.length > 0
        ? data.map((item, index) => <Card key={index} item={item} />)
        : staticCards}
    </div>
  );
};

export default Cards;
