import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
