import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/accountAPI";
import { NotificationsProvider } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationsProvider position="top-right">
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NotificationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
