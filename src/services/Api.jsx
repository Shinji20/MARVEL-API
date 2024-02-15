// import { useEffect, useState } from 'react';

export async function APIcomponent() {
  const urlAPI =
    'https://gateway.marvel.com:443/v1/public/characters?ts=2&apikey=77e46efa10ca352a1451254651e3584e&hash=edcc50c0e977c513e9f52bd657640abf';

  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error fetching data', error);
  }

  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(urlAPI)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setCharacters(res.data.results);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };

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

  //   fetchData();
  // }, []);
}

export default APIcomponent;
