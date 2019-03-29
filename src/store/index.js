// importa useReducer y createContext
import React from 'react';

// crea y exporta un nuevo contexto


// define el estado inicial para page


// crea una funcion reductora para cambiar de página


export function PaginationProvider({ children }) {
  // inicializa un nuevo estado que utilice nuestra función reductora y estado inicial


  // modifica los siguientes handlers para cambiar el número de página en el estado
  function handlePrev() {

  }

  function handleNext() {

  }

  return (
    <Context.Provider value={{ ...state, handlePrev, handleNext }}>
      {children}
    </Context.Provider>
  )
}
