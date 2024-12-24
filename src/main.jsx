import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Carga diferida del componente principal
const App = React.lazy(() => import('./App'));

// Componente de carga
const LoadingFallback = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-[#121212]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
