import React from "react";
import { Navigation } from "./src/Navigation/index";
import { AuthenticationContextProvider } from "./src/Servicios/Authentication/AuthenticationContext";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
}

