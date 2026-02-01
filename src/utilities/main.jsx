import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import App from "../utilities/App";
import { Provider } from "react-redux";
import store from "../store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
