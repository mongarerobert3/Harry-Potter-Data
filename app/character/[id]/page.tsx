'use client'

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { usePathname } from 'next/navigation';
import axios from 'axios';

const CharacterPage = () => {
  const [characterData, setCharacterData] = useState(null);

  const pathname = usePathname();
  const id = pathname.split('/').pop();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          console.log("In here", id)
          const response = await axios.get(`https://hp-api.onrender.com/api/character/${id}`);
          const data = response.data;
          setCharacterData(data);
          console.log("Character Data:", data);
        }
      } catch (error) {
        console.log('Error fetching character data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!characterData) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardActionArea className='flex'>
        <CardMedia
          component="img"
          height="140"
          image={characterData.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {characterData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterPage;
