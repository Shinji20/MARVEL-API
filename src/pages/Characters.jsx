import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIcomponent } from '../services/Api';

function Characters() {
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await APIcomponent();
        setCharacters(res.data.results);
      } catch (error) {
        console.log('error fetching characters', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='justify-center items-center h-16 max-w-full bg-gray-950 relative'>
      <Link to='/'>
        <h1 className='text-center flex-auto text-white h-24 text-4xl pt-2'>MARVEL</h1>
      </Link>
      <div className='grid grid-cols-3 gap-4'>
        {character.map((character, index) => (
          <div key={character.id} className='flex justify-center my-4 mx-4'>
            <div className='w-64 h-64 border-2 border-black'>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className='w-full h-4/5 object-cover'
              />
              <div className='flex flex-col justify-center items-center bg-slate-400 p-2 my-1'>
              <h2>Name: {character.name}</h2>
              {character.description ? (
                <p className='overflow-auto w-1/4'>Description: {character.description}</p>
              ) : (
                <p className='text-stone-700 h-2 '>No description aviable :(</p>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
