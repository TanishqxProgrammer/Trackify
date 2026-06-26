import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Page from "./pages/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/tracker" element={<Page />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;