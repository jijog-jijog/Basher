import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Students from './App.jsx'; // Import the Students component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Students /> {/* Use the Students component */}
  </StrictMode>,
);
