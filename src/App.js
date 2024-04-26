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
import Footer from './Components/Footer/footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


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
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          {/* Route for the women's category */}
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          {/* Route for the kids' category */}
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
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
        {/* Render Footer component */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
