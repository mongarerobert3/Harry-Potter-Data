'use client'

//import { useRouter } from 'next/router';
//import { useEffect, useState } from 'react';

const CharacterPage = () => {
  //const router = useRouter();
  //const { id } = router.query;
  //const [characterData, setCharacterData] = useState(null);

  /**useEffect(() => {
    if (id) {
      fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacterData(data);
        })
        .catch((error) => {
          console.log('Error fetching character data:', error);
        });
    }
  }, [id]);

  if (!characterData) {
    return <div>Loading...</div>;
  } **/

  return (
    <div>
      <h1>name</h1>
    </div>
  );
};

export default CharacterPage;
