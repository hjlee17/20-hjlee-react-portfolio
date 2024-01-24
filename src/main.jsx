import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import './reset.css'

import App from './App.jsx'
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import ResumePage from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
