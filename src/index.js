import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "./index.css";
import "./styles/mapbox-gl.css";
import "./styles/pulso.css";
import "mapbox-gl/dist/mapbox-gl.css";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);