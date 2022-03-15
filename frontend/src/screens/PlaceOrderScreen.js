import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrderScreen() {
const cart=useSelector(state=>state.cart);


const navigate=useNavigate();


const dispatch=useDispatch();

if (!cart.paymentMethod) {
            //   props.history.push('/shipping');
            navigate('/shipping');
}
const orderCreate=useSelector((state)=>state.orderCreate);
// console.log(orderCreate);
const {loading,success,error,order} =orderCreate;


// useEffect(()=>{
//     if (!cart.paymentMethod) {
//         //   props.history.push('/shipping');
//         navigate('/shipping');
//         }
//     if(success){
//         navigate(`/order/${order._id}`);
//     }
//   },[navigate,cart,success,order]);


 
  const toPrice=(num)=>Number(num.toFixed(2));
  cart.itemsPrice=toPrice(cart.cartItems.reduce((a,c)=>a+c.qty*c.price,0));
  cart.shippingPrice=cart.itemsPrice>100?toPrice(0):toPrice(10);
  cart.shippinAddress=cart.shippinAddress?cart.shippinAddress:'shipping address';

  cart.taxePrice=toPrice(0.15*cart.itemsPrice);
  cart.totalPrice=cart.itemsPrice+cart.shippingPrice+cart.taxePrice;
  const placeOrderHandler=()=>{
    //   console.log( cart.cartItems.userSignin.token);
    console.log('avant creation');
        dispatch(createOrder({...cart,orderItems:cart.cartItems}));
        console.log('apres creation');
    
    }
  
useEffect(() => {
    console.log('avant test');

    if (success) {
    console.log('test');
     navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, navigate, success]);

    return (
    <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Shipping Address</h2>
                            <p>
                                <strong >Name:</strong>{cart.shippingAddress.fullName}<br/>

                                <strong >Address:</strong>{cart.shippingAddress.address},
                                {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
                                {cart.shippingAddress.country}

                            </p>



                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>payment</h2>
                            <p>
                                <strong >payment Method:</strong>{cart.paymentMethod}

                                

                            </p>



                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>

          { cart.cartItems.map((item)=>(
            <li key={item.product}>
              <div className='row'>
                <div>
                  <img
                  src={item.image}
                  alt={item.name}
                  className='small'
                  >

                  </img>
                </div>
                <div className='min-30'>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
               
                <div>{item.qty}*{item.price}=${item.qty*item.price}</div>
               
              </div>
            </li>
          ))

          }
        </ul>

                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Order Summary</h2>
                        </li>
                        <li>
                            <div className="row">
                                <div>Items</div>
                                <div>${cart.itemsPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>shipping price</div>
                                <div>${cart.shippingPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>tax</div>
                                <div>${cart.taxePrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Order total</strong></div>
                                <div>${cart.totalPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <button 
                            type="button"
                             onClick={placeOrderHandler} 
                             className="primary block"
                             disabled={cart.cartItems.length===0}>Place Order</button>
                        </li>
                        {
                            loading&&<LoadingBox></LoadingBox>
                        }
                        {

                            error&&<MessageBox variant="danger">{error}</MessageBox>
                        }
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}
