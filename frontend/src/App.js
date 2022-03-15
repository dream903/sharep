import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import { signout } from './actions/userActions';
import AboutMe from './screens/AboutMe';
import CartScreen from './screens/CartScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import HomeScreen2 from './screens/HomeScreen2';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResumeScreen from './screens/ResumeScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

// import header from './components/header';
// import footer from './components/footer';
function App() {
  const cart=useSelector(state=>state.cart);
  const {cartItems}=cart;
  const userSignin=useSelector((state)=>state.userSignin);
  const {userInfo}=userSignin;
  const dispatch=useDispatch();
  const signOutHandler=()=>{
    dispatch(signout());

  }
  return (



    <div className='grid-container'>
      <Router>
  <header className="row">
    <div>
      <Link className="brand" to="/">My Potfolio</Link>
    </div>
    <div>
    <Link to="/aboutme">About Me

</Link>
      <Link to="/resume">Resume

      </Link>
      <Link to="/projet">Projets


      </Link>
      <Link to="/contact">Contact

      </Link>
      <Link to="/cart">Cart
      {cartItems.length>0 &&(<span className='badge'>
        {cartItems.length}</span>)} 

      </Link>
      {userInfo?(
       <div className='dropdown'>
      <Link to="#">{userInfo.name}<i className='fa fa-caret-down'></i>{' '}
      </Link>
      <ul className='dropdown-content'>
      <Link to="#signout" onClick={signOutHandler}>Sign Out</Link>  
      </ul> 
      </div>
      ):
      ( <Link to="/signin">Sign In</Link>)
      }
     
    </div>
  </header>
  
        <div >
              <Routes>
              <Route path="/cart" element={<CartScreen/>} />
               <Route path="/cart/:id" element={<CartScreen/>} />
               <Route path="/signin" element={<SigninScreen/>} />
               <Route path="/aboutme" element={<AboutMe/>} />
               
               <Route path="/resume" element={<ResumeScreen/>} />
               
               <Route path="/contact" element={<ContactScreen/>} />
               <Route path="/projet" element={<HomeScreen/>} />

               <Route path="/register" element={<RegisterScreen/>} />
               <Route path="/shipping" element={<ShippingAddressScreen/>} />
               <Route path="/payment" element={<PaymentMethodScreen/>} />
               <Route path="/placeorder" element={<PlaceOrderScreen/>} />
               <Route path="/order/:id" element={<OrderScreen/>} />
               <Route path="/" element={<HomeScreen2/>} exact />
              <Route path="/product/:id" element={<ProductScreen/>} />
                
              </Routes>
          </div>
          <footer className="row center">All right reserved</footer>
    </Router>
    </div>
    
   
  );
}

export default App;
