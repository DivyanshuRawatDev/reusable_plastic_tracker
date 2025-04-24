import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "./components/ui/provider.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Provider>
          <App />
        </Provider>
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
