import inst from './inst.svg';
import fb from './fb.svg';
import ln from './ln.svg';
import {  useNavigate } from 'react-router-dom';
import Typed from "react-typed";

// import gsap from 'gsap';
// import app from './app.js';
// import  { useEffect } from 'react';

export default function HomeScreen2() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = `https://github.com/Ziratsu/GSAP-Accueil-1/blob/master/app.js`;
//     script.async = true;
//     document.body.appendChild(script);

//     }, []);
const navigate=useNavigate();


const checkoutHandler=()=>{
    window.location.href="https://www.facebook.com/dev.job.315/";
    }
    const checkoutHandlerln=()=>{
        window.location.href=" https://www.linkedin.com/in/ayari-ilh-54540a220/";
    }
  return ( 
        <div>

<script src="./app.js"></script>

            
    <div className="lignes">
        <div className="l1"></div>
        <div className="l2"></div>
    </div>
<div>
<h4>       <span>WEB </span><span>DEVELOPPMENT </span>
        {/* <span>Elhem</span><br/><span>Web </span><span>Developer </span> */}
        </h4>
</div>
    <div className="container-first">
        {/* <h4>       <span>Hi </span><span>I'm </span><span>Elhem</span><br/><span>Web </span><span>Developer </span></h4> */}


            <Typed
            className='typed-text'
            strings={["Hi Im Elhem",".......","Web Developer",".......","Mern Stack Developer"]}
            typeSpeed={160}
            backSpeed={60}
            loop
            
           />

      
        <div className="container-btns">
            {/* <button className="btn-first b1">Discover</button> */}
            {/* <button className="btn-first b2">Contact Me</button> */}
            <button className="primary">Contact Me</button>
        </div>
    </div>

    <img 
    src="https://upload.wikimedia.org/wikipedia/commons/0/09/%D0%90pple_.png" 
    className="logo" alt=" "/>


    <ul className="medias">
        <li className="bulle"><img src={inst} 
        className="logo-medias" alt=""/></li>
        <li className="bulle">
    
            <img src={fb}         className="logo-medias" alt="" 

    onClick={checkoutHandler}/>
     
             </li>
        <li className="bulle" 
    onClick={checkoutHandlerln}><img src={ln}  
        className="logo-medias"  alt="" /></li>
        <li className="bulle">
          <img  src={inst}     className="logo-medias" alt=""/>
        </li>
    </ul>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
        

      </div>
      );
}
