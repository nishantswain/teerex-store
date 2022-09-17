import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import FreeTextFilter from './components/FreeTextFilter/freeTextFilter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/home';
import Shop from './screens/shop/shop';
import Cart from './screens/cart/cart';
import Product from './components/Product/product';
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state)
  console.log(state)
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
