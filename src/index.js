import React from 'react';

import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';

import About from './views/About';
import Galeria from './views/Galeria';
import Home from './views/Home';
import Lista from './views/Lista';
import ErrorPage from './views/Error';

const routerCustom = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/galery",
    element: <Galeria />,
  },
  {
    path: "/list",
    element: <Lista />,
  },
  {
    path: "/list/:id",
    element: <Lista />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerCustom} />
  </React.StrictMode>
);

// <App />