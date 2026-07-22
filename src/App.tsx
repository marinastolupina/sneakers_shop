import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { ProductPage } from './pages/Product/Product';
import { Cart } from './pages/Cart/Cart';
import { Favorite } from './pages/Favorite/Favorite';
import { Checkout } from './pages/Checkout/Checkout';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;