import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../App.css';
import ImovityCaseStudy from './ImovityCaseStudy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImovityCaseStudy />
  </StrictMode>
);
