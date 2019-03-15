import React, { useState } from 'react';

export function Navigation() {
  const [page, setPage] = useState(1);

  return (
    <div className="navigation">
      <button
        onClick={() => setPage(prevPage => prevPage - 1)}
        disabled={page <= 1}
      >
        prev
      </button>
      <span>{page}</span>
      <button
        onClick={() => setPage(prevPage => prevPage + 1)}
        disabled={page >= 10}
      >
        next
      </button>
    </div>
  );
}
