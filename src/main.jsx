import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import ProductCatalog from "./Pages/ProductCatalog.jsx";
import MyContext from "./Context/MyContext.jsx";
import Routes from "./Routes/Routes.jsx";
import Layout from "./Layouts/Layout.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext>
      <RouterProvider router={Routes} />
    </MyContext>
  </StrictMode>
);
