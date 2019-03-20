// importa useReducer
import React, { useEffect } from 'react';
import axios from 'axios';

const imagesService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

// define el estado inicial


// crea una función reductora


export function Images() {
  // Inicializa un nuevo estado que utilice nuestra función reductora y estado inicial.


  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    // Cambia valor del estado loading a true.


    imagesService.get('/photos', {
      params: {
        _page: 1,
        _limit: 9,
      },
      cancelToken: source.token,
    })
      .then(({ data }) => {
        // Almacena la respuesta en el estado data y cambia el valor del estado loading a false.


      })
      .catch((error) => {
        // Almacena los errores en el estado error y cambia el valor del estado loading a false.


      });
    return () => {
      source.cancel('stopped request');
    }
  }, []);


  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Ups, Something went wrong!</p>;
  return (
    <div className="images-container">
      {!!state.data.length && state.data.map(({ thumbnailUrl, id, title }) => (
        <img
          src={thumbnailUrl}
          alt={title}
          key={id}
        />
      ))}
    </div>
  );
}
