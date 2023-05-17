import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main.jsx";
import Bookings from "./pages/Bookings/Bookings";
import BookingServices from "./pages/BookingServices/BookingServices";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookingServices />
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
