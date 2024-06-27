// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./assets/styles/index.css";

import { RouterProvider } from "react-router-dom";
import  Routes  from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light">
        <RouterProvider router={Routes} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
