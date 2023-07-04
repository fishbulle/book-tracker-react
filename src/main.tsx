import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './home/Home';
import ErrorPage from './error-page';
import "../src/assets/styles/style.css";
import Library from './library/Library';
import Profile from './profile/Profile';
import Feed from './feed/Feed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "feed",
        element: <Feed />
      }
    ]
  },
  {
    path: "/library",
    element: <Library />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)