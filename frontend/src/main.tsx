import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ToDoContextProvider from './Store/ToDoContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </StrictMode>
);
