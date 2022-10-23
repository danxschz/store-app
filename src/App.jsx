import accessories from './data/accessories.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import InfoBar from './components/InfoBar/InfoBar';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';
import Home from './pages/Home/Home';
import Cases from './pages/Cases/Cases';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Collections from './pages/Collections/Collections';
import Collection from './pages/Collection/Collection';
import Accessories from './pages/Accessories/Accessories';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';
import ThankYou from './pages/ThankYou/ThankYou';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [collections, setCollections] = useState([]);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCollections();
    getCases();
  }, []);

  const getCollections = async () => {
    const response = await fetch('https://store-app-api-production.up.railway.app/collections');
    const json = await response.json();
    setCollections(json);
  }

  const getCases = async () => {
    const response = await fetch('https://store-app-api-production.up.railway.app/cases');
    const json = await response.json();
    setCases(json);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <InfoBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home collections={collections} cases={cases} />} />
          <Route path="/shop/cases" element={<Cases cases={cases} />} />
          <Route path="/shop/cases/:id" element={<ItemDetail cart={cart} setCart={setCart} />} />
          <Route path="/shop/collections" element={<Collections collections={collections} />} />
          <Route path="/shop/collections/:slug" element={<Collection />} />
          <Route path="/shop/accessories" element={<Accessories accessories={accessories} />} />
          <Route path="/shop/accessories/:id" element={<ItemDetail cart={cart} setCart={setCart} accessory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/checkout" element={<ThankYou />} />
        </Routes>
        <MobileNav />
        <Cart cart={cart} setCart={setCart} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
