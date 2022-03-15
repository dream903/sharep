import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useParams } from 'react-router';
import  Axios  from 'axios';
import {PayPalButton} from 'react-paypal-button-v2';
import { ORDER_PAY_RESET } from '../constants/orderConstants';

export default function OrderScreen(props) {

    const { id } = useParams();
    const [sdkReady,setSdkReady]=useState(false);
    // console.log(id);
    const orderDetails=useSelector(state=>state.orderDetails);
    const {loading,order,error}=orderDetails;
const orderPay=useSelector(state=>state.orderPay);

const {error:errorPay,loading:loadingPay,success:successPay}=orderPay;


    const dispatch=useDispatch();
 
useEffect(() => {
    const addPayPalScript = async () => {
        const { data } = await Axios.get('/api/config/paypal');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (!order||successPay||(order&&order._id!==id)) {
          dispatch({type:ORDER_PAY_RESET});
        dispatch(detailsOrder(id));
      } else {
        if (!order.isPaid) {
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
        }
      }
    }, [dispatch, order, id, sdkReady,successPay]);
  console.log('order');


  const successPaymentHandler=(paymentResult)=>{
     dispatch(payOrder(order,paymentResult));

  }

    return loading?(<LoadingBox></LoadingBox>) :
    error?(<MessageBox variant="danger">{error}</MessageBox>):
    (
    <div>
        <h1>Order {order._id}</h1>
        <div className="row top">
            <div className="col-2">
                <ul>
                    <li>
                        <div className="card card-body">
                            <h2>Shipping Address</h2>
                            <p>
                                <strong >Name:</strong>{order.shippingAddress.fullName}<br/>

                                <strong >Address:</strong>{order.shippingAddress.address},
                                {order.shippingAddress.city},{order.shippingAddress.postalCode},
                                {order.shippingAddress.country}

                            </p>

                        {order.isDelivered?
                        (<MessageBox variant="success">Delivered At{order.deliveredAT}</MessageBox>)
                        :(<MessageBox variant="danger"> Not Delivered</MessageBox>)}
                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>payment</h2>
                            <p>
                                <strong >payment Method:</strong>{order.paymentMethod}

                                

                            </p>

                                {order.isPaid?
                                (<MessageBox variant="success">Paid At{order.paidAT}</MessageBox>)
                                :(<MessageBox variant="danger"> Not Paid</MessageBox>)}

                        </div>
                    </li>
                    <li>
                        <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>

                                    { order.orderItems.map((item)=>(
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
                                <div>${order.itemsPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>shipping price</div>
                                <div>${order.shippingPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>tax</div>
                                <div>${order.taxePrice.toFixed(2)}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div><strong>Order Total</strong></div>
                                <div>${order.totalPrice.toFixed(2)}</div>
                            </div>
                        </li>
                        {
                            !order.isPaid &&(
                                <li>
                                    {!sdkReady?(<LoadingBox></LoadingBox>):
                                    (
                                    <>

                                    {errorPay&&(<MessageBox variant="danger">{errorPay}</MessageBox>)}
                                    {loadingPay&& <LoadingBox></LoadingBox>}
                                     <PayPalButton amount={order.totalPrice}
                                    onSuccess={successPaymentHandler}>

                                    </PayPalButton>
                                    
                                    </>
                                   )
                                    }
                                </li>
                            )
                        }
                      
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}







