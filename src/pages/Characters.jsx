import React, { useEffect, useState } from 'react';

import { APIcomponent } from '../services/Api.jsx';
import { Btnback } from '../componets/Btnback.jsx';

function Characters() {
  const [character, setCharacters] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

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
    <div>
      <Btnback />

      <div className='grid grid-cols-3 gap-4'>
        {character.map((character, index) => (
          <div
            key={character.id}
            className='flex justify-center my-4 mx-4'
            onMouseEnter={() => setHoveredImage(character.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className='w-81 h-80 border-2 border-black flex'>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className={`h-full w-2/3 object-cover transition-transform ${
                  hoveredImage === character.id ? 'transform scale-110' : ''
                }`}
              />

              <div className='flex flex-col justify-center items-start bg-slate-400 p-2 w-2/3 overflow-hidden ml-px'>
                <div className='text-center'>
                  <h2 className='text-black font-bold text-center'>
                    {character.name}
                  </h2>

                  {character.description ? (
                    <p
                      className='text-xs text-stone-950 whitespace-normal m-1-black cursor-pointer overflow-y-auto mt-2'
                      style={{
                        maxHeight: '190px',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#71717a #94a3b8',
                      }}
                    >
                      Description: {character.description}
                    </p>
                  ) : (
                    <p className='text-neutral-700 h-2 text-xs'>
                      No description available :(
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
