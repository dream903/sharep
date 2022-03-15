import React from 'react';
import Axios from 'axios';
// import FileDownload from 'js-file-download';
import ilh from './ilh.jpg';
import tunisia from './tunisia.jpg';
import tn from './tn.jpg';
import sb4 from './sb4.jpg';
import jm from './jm.jpg';

import isg from './isg.jpg';

export default function AboutMe() {

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
  
  
  return(
    <div>
        

        <div className="containertc">
            {/* <div class="HEADERc">header test composant</div> */}
            {/* <div class="MyFooterc">ELSA@All Rights Reserved</div> */}
            <div className="SDBC">
            {/* <img src={sb4}></img> */}
            <h3>Le parcours </h3>

            <p>
              Est-ce que vous voyez cette séquence culte du film Le Fabuleux destin d’Amelie Poulin ? Vous, savez,
                celle qui nous présente le personnage à travers ce qu’elle aime et n’aime pas ! J’ai eu envide de me prêter à ce 
                jeu pour introduire mon invitée du jour. Dans la vie, Chloé aime : Harry Styles, la couleur rose, les Totally Spies, ses chats 
                mais aussi son métier. En revanche Chloé n’aime pas : se sentir bridée dans sa créativité, faire tous les jours la même chose, 
                avoir trop de contraintes et surtout et se prendre la tête avec l’URSAFF. Si vous la suivez sur les réseaux sociaux, 
                vous savez certainement…
              </p>

              <img src={jm}></img>
              <img src={isg}></img>

            </div>
            <div className="IMGC"> 
             <img src={tunisia}></img>
             </div>
            <div className="ZONE1">
            <img src={ilh}></img>
                <p> Moi c'est Elhem
                               Passionnée de médias, d'innovation et de digital je suis 
                               une grande curieuse qui aime s'inspirer au quotidien et partager ses découvertes
                               . Pour m'écrire c'est juste ici </p>
               
                               <br/>
                               <div className="highleted-text">
                 <span >                   👇
                </span>
              
            
            </div>
                                eldream903@gmail.com
         
                                
                <div className='col-8-form-group mx-auto'>
                                       <input type="button" className='primary'  value="Download Resume" onClick={(e)=>download(e)}></input>
                                   </div>
                </div>
            <div className="ZONE2">
            <img src={sb4}></img>

                Moi c'est Elhem
                               Passionnée de médias, d'innovation et de digital je suis 
                               une grande curieuse qui aime s'inspirer au quotidien et partager ses découvertes
                               . Pour m'écrire c'est juste ici 
                               {/* <br/>
                               <div className="highleted-text">
                              <span >                   👇
                              </span>
              
            
                            </div> */}
            </div>
            <div className="ZONE3">
            <img src={jm}></img>

            </div>
            <div className="MC1">
              
              {/* <h3>Le parcours </h3>
              <p>
              Est-ce que vous voyez cette séquence culte du film Le Fabuleux destin d’Amelie Poulin ? Vous, savez,
                celle qui nous présente le personnage à travers ce qu’elle aime et n’aime pas ! J’ai eu envide de me prêter à ce 
                jeu pour introduire mon invitée du jour. Dans la vie, Chloé aime : Harry Styles, la couleur rose, les Totally Spies, ses chats 
                mais aussi son métier. En revanche Chloé n’aime pas : se sentir bridée dans sa créativité, faire tous les jours la même chose, 
                avoir trop de contraintes et surtout et se prendre la tête avec l’URSAFF. Si vous la suivez sur les réseaux sociaux, 
                vous savez certainement…
              </p> */}
              </div>
            {/* <div class="MC2"><h3>Lancer un projet personnel en 2022 : mode d’emploi</h3> */}
                {/* 10 janvier 2022
                C’est le tout premier épisode de podcast alors permettez moi de vous souhaiter
                 une douce année 2022, qu’elle puisse vous apporter la sérénité et l’équilibre
                  dont vous avez besoin. Le passage à la nouvelle année est symbolique pour beaucoup de personnes
                   : ils permet de faire la rétrospective sur les douze dernier mois mais aussi de fixer ses intentions 
                   pour l’année qui suit. Cette période peut aussi être compliquée pour notre santé mentale, surtout en 
                   voyant les plus belles réussites des autres sur les réseaux sociaux. Alors rappelez-vous qu’on montre bien 
                   ce qu’on veut sur ces plateformes et que c’est à chacun de mettre un définition sur ce qu’est une…</div> */}
            {/* <div class="ADVERTIZEC">zone pub</div> */}
          </div>
          </div>
  )
}
