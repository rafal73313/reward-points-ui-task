import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { ErrorContextGlobalProvider } from './context/ErrorContextGlobal';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <ErrorContextGlobalProvider>
    <App />
  </ErrorContextGlobalProvider>
);
