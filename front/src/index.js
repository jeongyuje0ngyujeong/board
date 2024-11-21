import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import Login from "./routes/login";
import Register from "./routes/register";
import Main from "./routes/main";

import Home from './routes/home';
import Profile from './routes/profile';
import Diary from './routes/diary';
import Photo from './routes/photo';
import Gallery from './routes/gallery';
import Bulletin from './routes/bulletin';
import Guest from './routes/guest';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/myhome",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'diary',
        element: <Diary />
      },
      {
        path: 'photo',
        element: <Photo />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'bulletin',
        element: <Bulletin />
      },
      {
        path: 'guest',
        element: <Guest />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
