import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/base.css';
import './styles/common.css';

import { AllComponentsView } from './views/AllComponentsView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllComponentsView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
