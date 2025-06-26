import React from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element not found');
}
