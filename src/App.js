import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Register from './signuppage/Signuppage';
import Loginpg from './loginpage/Loginpage';
import Forgot from './forgotpage/Forgot';
import Home from './home/Home';
import ShoppingDetails from './ProductData/ShoppingDetails';
import AllProducts from './ProductData/AllProducts';
import Gift from './ProductData/Gift';
import Mobile from './ProductData/Mobile';
import Electronics from './ProductData/Electronics';
import Kitchen from './ProductData/Kitchen';
import Fashion from './ProductData/Fashion';
import NewRelease from './ProductData/NewReleases';
import Sports from './ProductData/Sports';
import Pantry from './ProductData/Pantry';
import CartPage from './cart/Cart';
import { CartProvider } from "../src/cart/CartContext";
import Offers from './ProductData/Offers';
import filtereditems from './navbar/filtereditems';
import Pc from './ProductData/Pc';
import Watches from './ProductData/Watches';
import PaymentPage from './cart/Paymentspage';

function App() {
  return (
    <div className="Box">
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/login" element={<Loginpg />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/all" element={<AllProducts />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/newrelease" element={<NewRelease />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/pc" element={<Pc />} />
            <Route path="/watch" element={<Watches />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/filtered-items" element={<filtereditems/>} />
            <Route path="/payment" element={<PaymentPage/>} />
            
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
