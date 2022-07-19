import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComp from "./components/NavBarComp";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import FooterStrip from "./components/FooterStrip";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Term from "./pages/Term";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ThankYou from "./Modal/ThankYou";
import Form from "./Modal/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/warranty" element={<WarrantyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/tc" element={<Term />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thank" element={<ThankYou />} />
        </Routes>
        <Footer />
        <FooterStrip />
      </BrowserRouter>
    </div>
  );
}

export default App;
