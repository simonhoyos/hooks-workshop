import React from 'react';
import { useApi } from '../hooks/useApi';

export function Images() {
  const { data, error, loading } = useApi();

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
