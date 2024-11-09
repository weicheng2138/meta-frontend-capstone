import React, { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Reservations from "./pages/Reservations";
import AlertProvider from "./context/AlertProvider";
import Alert from "./components/Alert";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <Alert />
    </AlertProvider>
  </StrictMode>,
);
