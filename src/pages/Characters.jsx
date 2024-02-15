import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIcomponent } from '../services/Api';

function Characters() {
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await APIcomponent();
      setCharacters(res.data.results);
    } catch (error) {
      console.log('error fetching characters', error);
    }
  };

  return (
    <div>
      <Link to='/' >
        <h1>MARVEL</h1>
      </Link>
      {character.map((character, index) => (
        <div key={character.id} className='grid grid-cols-3 gap-4'>
          <img src={character.image} alt={character.name}/>
        </div>
      ))}
    </div>

    // <div>
    //   <h1>Marvel Characters</h1>
    //   <ul>
    //     {characters.map((character) => (
    //       <li key={character.id}>
    //         <h2>{character.name}</h2>
    //         <p>Description: {character.description}</p>
    //         {character.thumbnail && (
    //           <img
    //             src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
    //             alt={character.name}
    //           />
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Characters;
