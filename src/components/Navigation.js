import React from 'react';
import { PaginationConsumer } from '../context';

export function Navigation() {
  return (
    <PaginationConsumer>
      {({ page, handlePrev, handleNext }) => (
        <div className="navigation">
          <button onClick={handlePrev} disabled={page <= 1}>Prev</button>
          <span>{page}</span>
          <button onClick={handleNext} disabled={page >= 10}>Next</button>
        </div>
      )}
    </PaginationConsumer>
  )
}
