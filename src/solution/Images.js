import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imagesService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

export function Images() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    setLoading(true);

    imagesService.get('/photos', {
      params: {
        _page: 1,
        _limit: 9,
      },
      cancelToken: source.token,
    })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
    return () => {
      source.cancel('stopped request');
    }
  }, []);


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
