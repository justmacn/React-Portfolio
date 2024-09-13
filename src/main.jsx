import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/AboutPage';

// portfolio routes to the components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/work',
        element: <WorkPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

// Render the chakra ui provider 
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
