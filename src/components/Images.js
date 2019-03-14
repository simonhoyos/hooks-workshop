import React from 'react';
import { Api } from '../api';
import { PaginationConsumer } from '../context';

export function Images() {
  return (
    <PaginationConsumer>
      {({ images, page }) => (
        <div className="images-container">
          <Api path="/photos" key={page}>
            {({ loading, error }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return;
              return !!images[page] && images[page].map(({ thumbnailUrl, id, title }) => (
                <img
                  src={thumbnailUrl}
                  alt={title}
                  key={id}
                />
                ))
              }}
          </Api>
        </div>
      )}
    </PaginationConsumer>
  );
}
