import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import PlaceOrder from "./pages/placeOrder/PLaceOrder";
import Cart from "./pages/cart/Cart";
import PageNotFound from "./pages/notFound/PageNotFound";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[80%] mx-auto px-5">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
