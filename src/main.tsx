import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  useActionData,
} from "react-router-dom";
import UseEffect from "./components/UseEffect.tsx";
import Home from "./components/pages/Home.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import ScrollContainer from "../ScrollContainer.tsx";
import ScrollPage from "./components/pages/ScrollPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [{ path: "useEffect", element: <UseEffect /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "useeffect",
    element: <UseEffect />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "scroll",
    element: <ScrollPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
