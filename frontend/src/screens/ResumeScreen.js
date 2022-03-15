import React from 'react';

import cv from './cv.jpg';


export default function ResumeScreen() {
  console.log(React.version);
  return (


  <div>
        

        <div className="containertc">
            {/* <div class="HEADERc">header test composant</div> */}
            {/* <div class="MyFooterc">ELSA@All Rights Reserved</div> */}
            <div className="SDBC">
            {/* <img src={sb4}></img> */}
            <h3>Le parcours </h3>

            <p>
         Développeur full stack certifié Scrum, avec plus de 2 ans d’expérience. Mordu d’informatique, 
 j’ai appris à coder dès mon plus jeune âge dans divers langages informatiques (Javascript, PHP, AngularJS…)
 et ai créé des projets personnels, dont un site référençant les vidéos les plus vues sur la plateforme Twitch 
 
(+ 5000 visites/mois). Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance. 
    
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
