import { useEffect, useState } from 'react';

const urlAPI =
  'https://gateway.marvel.com:443/v1/public/characters?ts=2&apikey=77e46efa10ca352a1451254651e3584e&hash=edcc50c0e977c513e9f52bd657640abf';

function APIcomponent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(urlAPI)
        .then((res) => res.json())
        .then((res) => {
          setCharacters(res.data.results);
          console.log(res.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
			};
			fetchData();
		}, []);

		// const fetchData = () => {
		//   axios
		//     .get(urlAPI)
		//     .then((res) => {
		//       setCharacters(res.data.results);
		//       console.log(res.data.results);
		//     })
		//     .catch((error) => {
		//       console.log(error);
		//     });

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>Description: {character.description}</p>
            {character.thumbnail && (
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIcomponent;
