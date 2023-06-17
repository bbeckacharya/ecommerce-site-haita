import "../styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
import { VisibilityProvider } from "../hooks/VisibilityContext";
import Header from "../components/Header";
import Home from "./Home";
import NotFound from "./404";
import Footer from "../components/Footer";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color="#f11946"
        waitingTime={200}
        height={3}
        progress={progress}
      />
      <VisibilityProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home setProgress={setProgress} />} />
            <Route path="*" element={<NotFound setProgress={setProgress} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </VisibilityProvider>
    </>
  );
}

export default App;
