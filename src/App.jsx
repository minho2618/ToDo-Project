import React from "react"
import { createBrowserRouter,  RouterProvider, } from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/netflix",
    element: <Netflix />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
