import React from 'react';
import {  useNavigate } from 'react-router-dom';

import cv from './cv.jpg';
import Axios from 'axios';



export default function ResumeScreen() {
  console.log(React.version);

  const download=(e)=>
  {
    e.preventDefault()
    Axios({
      url:"http://localhost:3001/d",
      method:"GET",
      responseType:"blob"}).then((res)=>{
        console.log(res);

        const url=window.URL.createObjectURL(new Blob([res.data]));
        const link=document.createElement('a');
        link.href=url;
        link.setAttribute('download','resume.pdf');
        document.body.appendChild(link);
        link.click();
        // FileDownload(res.data,"download.pdf")
      })
   
  }
  return (


  <div>
        

        <div className="containertc">
            {/* <div class="HEADERc">header test composant</div> */}
            {/* <div class="MyFooterc">ELSA@All Rights Reserved</div> */}
            <div className="SDBC">
            {/* <img src={sb4}></img> */}
            <h3>Le parcours </h3>

            <p>
         Développeur full stack certifié Scrum, avec plus de 10 ans d’expérience. Mordu d’informatique, 
          j’ai codé dans divers langages informatiques (Javascript, PHP, ReactJS)
          et ai créé differents projets . 
          Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ;
          de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance. 
    
              </p>

              {/* <img src={jm}></img> */}

            </div>
            <div className="IMGC"> 
             <img src={cv}></img>
             </div>
            <div className="ZONE1">
            {/* <img src={ilh}></img> */}
               
                               <div className="highleted-text">
                 <span >                   👇
                </span>
              
            
            </div>
         
                                
                <div className='col-8-form-group mx-auto'>
                                       <input type="button" className='primary'  value="Download Resume" onClick={(e)=>download(e)}></input>
                                   </div>
                </div>
            <div className="ZONE2">
            </div>
            <div className="ZONE3">


            </div>
            <div className="MC1">
              
          
              </div>
            {/* <div class="MC2">
            </div> */}
            {/* <div class="ADVERTIZEC">zone pub</div> */}
          </div>
          </div>
  )




}
