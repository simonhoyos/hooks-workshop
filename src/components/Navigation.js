// importa useContext
import React from 'react';
// importa el contexto


export function Navigation() {
  // obten los valores del contexto


  // Arregla el siguiente código para que funcione correctamente usando los valores del contexto
  return (
    <div className="navigation">
      <button
        onClick={handlePrev}
        disabled={page <= 1}
      >
        prev
      </button>
      <span>{page}</span>
      <button
        onClick={handleNext}
        disabled={page >= 10}
      >
        next
      </button>
    </div>
  );
}
