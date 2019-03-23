import React, { useReducer, createContext } from 'react';

export const Context = createContext();

const initialState = {
  page: 1,
};

export const PREV_PAGE = 'PREV_ACTION';
export const NEXT_PAGE = 'NEXT_ACTION';

function reducer(state, action) {
  switch (action.type) {
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
}

export function PaginationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
