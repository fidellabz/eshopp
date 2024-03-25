// Import the CSS file for styling
import './App.css';

// Import necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import custom components
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

// Define the main App component
function App() {
  return (
    <div>
      {/* Set up BrowserRouter to enable routing */}
      <BrowserRouter>
        {/* Render Navbar component */}
        <Navbar />
        {/* Define Routes component to specify routes */}
        <Routes>
          {/* Define routes for different pages */}
          {/* Route for the main shop page */}
          <Route path='/' element={<Shop />} />
          {/* Route for the men's category */}
          <Route path='/men' element={<ShopCategory category="men" />} />
          {/* Route for the women's category */}
          <Route path='/women' element={<ShopCategory category="women" />} />
          {/* Route for the kids' category */}
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          {/* Route for individual product pages */}
          <Route path='/product' element={<Product />}>
            {/* Nested route for individual product pages */}
            <Route path=':productId' element={<Product />} />
          </Route>
          {/* Route for the shopping cart page */}
          <Route path='/cart' element={<Cart />} />
          {/* Route for the login/signup page */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
