import React, { useContext } from 'react';
import { Context, PREV_PAGE, NEXT_PAGE } from '../store';

export function Navigation() {
  const { state, dispatch } = useContext(Context)

  return (
    <div className="navigation">
      <button
        onClick={() => dispatch({ type: PREV_PAGE })}
        disabled={state.page <= 1}
      >
        prev
      </button>
      <span>{state.page}</span>
      <button
        onClick={() => dispatch({ type: NEXT_PAGE })}
        disabled={state.page >= 10}
      >
        next
      </button>
    </div>
  );
}
