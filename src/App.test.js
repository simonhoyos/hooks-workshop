import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PaginationProvider } from './context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PaginationProvider>
      <App />
    </PaginationProvider>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
