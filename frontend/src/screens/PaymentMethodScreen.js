import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {
    const [paymentMethod,setPaymentMethod]=useState('paypal');
    const cart = useSelector((state) => state.cart);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { shippingAddress } = cart;
     useEffect(()=>{
        if (!shippingAddress.address) {
            //   props.history.push('/shipping');
            navigate('/shipping');
            }
      },[navigate,shippingAddress]);
    
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        // props.history.push('/placeorder');
        navigate('/placeorder');
    };
  return (
    <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <form className="form" onSubmit={submitHandler}>

            <div>
                <h1>Payment Method</h1>
            </div>
            <div>
                <input 
                type="radio"
                 id="paypal"
                 value="paypal" name="paymentMethod" required checked 
                 onChange={(e)=>setPaymentMethod(e.target.value)}>
                </input>
                <label htmlFor="paypal">Paypal</label>

            </div>
            <div>
                <input 
                type="radio"
                 id="stripe"
                 value="stripe" name="paymentMethod" required 
                 onChange={(e)=>setPaymentMethod(e.target.value)}>
                </input>
                <label htmlFor="stripe">Stripe</label>
                
            </div>
            <div>
                <button className="primary" type="submit">Continue</button>
            </div>
        </form>
    </div>
  )
}
