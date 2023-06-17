import "../styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VisibilityProvider } from "../hooks/VisibilityContext";
import Header from "../components/Header";
import Home from "./Home";
import NotFound from "./404";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <VisibilityProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </VisibilityProvider>
    </>
  );
};

export default App;
