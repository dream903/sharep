import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { register } from '../actions/userActions';
import { useNavigate } from "react-router-dom";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {
    const [name,setName]=useState('');

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const navigate=useNavigate();

    // const params = useParams();

   

    // const redirect=props.location.search?props.location.search.split('=')[1]:'/';

    const {search} =useLocation();
    console.log('url'||search);

    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl?redirectInUrl:"/";

    // console.log(redirect);

    const userRegister=useSelector((state)=>state.userRegister);
    const {userInfo,error,loading}=userRegister;
    const dispatch=useDispatch()

   

  

const submitHandler = (e) => { 
    e.preventDefault(); 
    if(password!==confirmPassword){
        alert('Password and confirm password are not match');
    }else{
        dispatch(register(name,email, password));

    }
     
    
    };
    
    
     useEffect(()=>{
        if(userInfo){

         // props.history.push('/signin?redirect=shipping')
        //  const paramsString = 'redirect=shipping';
         // var searchParams = new URLSearchParams(paramsString);
         // console.log(redirectInUrl);
        //  const redirectInUrl =  new URLSearchParams(paramsString);
        // new URLSearchParams('/signin?redirect=shipping').get('redirect');

        // const redirect = redirectInUrl?redirectInUrl:1;
         console.log(redirect);
        //  navigate(`${redirect}`);
         navigate(redirect);

        // props.history.push(redirect)
        }
    },[navigate,redirect,userInfo])
  
  
  
    return (
    <div>
         <form className='form' onSubmit={submitHandler}>
             <div>
                 <h1>Create Account</h1>
             </div>
             {loading && <LoadingBox></LoadingBox>}
             {error && <MessageBox variant="danger">{error}</MessageBox>}

             <div>
               <label htmlFor="name">Name</label>
               <input
                type="text"
                 id="name"
                 placeholder='Enter name' required
                  onChange={e=>setName(e.target.value)}>

             </input>
             </div>
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
             <label htmlFor="password"> Password</label>
               <input
                type="password"
                 id="password"
                 placeholder='Enter Password' required
                onChange={e=>setPassword(e.target.value)}>

             </input>
           </div>
           <div>
             <label htmlFor="confirmPassword">confirm Password </label>
               <input
                type="password"
                 id="confirmPassword"
                 placeholder='Enter confirm Password' required
                onChange={e=>setConfirmPassword(e.target.value)}>

             </input>
           </div>
           <div>
               <label/>
               <button className="primary" type="submit">Register</button>
           </div>
           <div>
               <label/>
               <div>
                   Already have ann Account ?{''}
                   <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
               </div>
           </div>
         </form>
    </div>
  )
}
