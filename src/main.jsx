import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Tutorial from "./pages/Tutorial";
import ListView from "./pages/Listview";
import DetailsView from "./pages/DetailsView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Tutorial />} />
      <Route path="/List" element={<ListView />} />
      <Route path="/detailsview" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
