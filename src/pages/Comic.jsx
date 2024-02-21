import React, { useEffect, useState } from 'react';

import { APIcomponent } from '../services/Api.jsx';
import { Btnback } from '../componets/Btnback.jsx';

function Comic() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await APIcomponent();
        setComics(res.data.results);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Btnback />

      <div className='grid grid-cols-3 gap-4'>
        {comics.map((comic, index) => (
          <div key={comic.id} className='flex justify-center my-4 mx-4'>
            {comic.thumbnail &&
              comic.thumbnail.path &&
              comic.thumbnail.extension && (
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              )}
              <div flex flex-col justify-center items-start bg-slate-400 p-2 >
                <div>
                  <h2>
                    {comic.name}
                  </h2>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comic;
