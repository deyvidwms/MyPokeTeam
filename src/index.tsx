import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Initial from './pages/Initial';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>
);