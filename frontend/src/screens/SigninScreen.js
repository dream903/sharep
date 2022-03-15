import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { signin } from '../actions/userActions';
import { useNavigate } from "react-router-dom";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function SigninScreen(props) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const {search} =useLocation();

    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl?redirectInUrl:"/";

    console.log(redirect);

    const userSignin=useSelector((state)=>state.userSignin);
    const {userInfo,error,loading}=userSignin;
    const dispatch=useDispatch()

   

  

const submitHandler = (e) => { 
    e.preventDefault(); 
    dispatch(signin(email, password));
     
    
    };
    
    
     useEffect(()=>{
        if(userInfo){

          
         navigate(`/`)

        }
    },[navigate,redirect,userInfo])
  
  
  
    return (
    <div>
         <form className='form' onSubmit={submitHandler}>
             <div>
                 <h1>Sign In</h1>
             </div>
             {loading && <LoadingBox></LoadingBox>}
             {error && <MessageBox variant="danger">{error}</MessageBox>}
           <div>
               <label htmlFor="email">Email Address</label>
               <input
                type="email"
                 id="email"
                 placeholder='Enter Email' required
                  onChange={e=>setEmail(e.target.value)}>

             </input>
             </div>
             <div>
             <label htmlFor="password">Email Password</label>
               <input
                type="password"
                 id="password"
                 placeholder='Enter Password' required
                onChange={e=>setPassword(e.target.value)}>

             </input>
           </div>
           <div>
               <label/>
               <button className="primary" type="submit">Sign In</button>
           </div>
           <div>
               <label/>
               <div>
                   New Customer?{''}
                   <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
               </div>
           </div>
         </form>
    </div>
  )
}
