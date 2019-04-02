// importa useState y useEffect
import React from 'react';
import axios from 'axios';

// instancia de axios con la configuración inicial para nuestras peticiones
const imagesService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

export function Images() {
  // inicializa 3 estados: data, error, loading con sus respectivos handlers y valores por defecto [], null, false respectivamente.


  // Extra: crea un token para cancelar la petición de axios.
  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();

  // 1. inicializa la petición. Cambia el valor del estado loading a true.
  // 2. Almacena las respuestas exitosas en el estado data y cualquier posible error en el estado error.
  // 3. La petición solo se debe realizar una vez después de completado el primer renderizado.
  // 4. Recuerda cambiar nuevamente el valor del estado loading a false después de terminada la petición.


  // petición para obtener la lista de imagenes.
  // imagesService.get('/photos', {
  //   params: {
  //     _page: 1,
  //     _limit: 9,
  //   },
    // Extra: asigna el token de cancelación a la petición.
    // cancelToken: source.token,
  // })
  //   .then(({ data }) => {})
  //   .catch((error) => {});

  // Extra: cancela la petición actual.
  // source.cancel('stopped request');

  // No modificar el renderizado de este componente
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ups, Something went wrong!</p>;
  return (
    <div className="images-container">
      {!!data.length && data.map(({ thumbnailUrl, id, title }) => (
        <img
          src={thumbnailUrl}
          alt={title}
          key={id}
        />
      ))}
    </div>
  );
}
