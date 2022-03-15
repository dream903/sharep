import React from 'react';
//  import emailjs from '@emailjs/browser';
 import emailjs from 'emailjs-com';


export default function ContactScreen() {

    const sendEmail=(e)=>{
        console.log(e);
        e.preventDefault();


        emailjs.sendForm('service_s20c52d', 'template_vtyje9l', e.target, 'user_UHVBQLfKA5nw40KDI4y0q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        
      }
  return (




//     <div>
//     <form className='form' onSubmit={submitHandler}>
//         <div>
//             <h1>Sign In</h1>
//         </div>
//         {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>}
//       <div>
//           <label htmlFor="email">Email Address</label>
//           <input
//            type="email"
//             id="email"
//             placeholder='Enter Email' required
//              onChange={e=>setEmail(e.target.value)}>

//         </input>
//         </div>
//         <div>
//         <label htmlFor="password">Email Password</label>
//           <input
//            type="password"
//             id="password"
//             placeholder='Enter Password' required
//            onChange={e=>setPassword(e.target.value)}>

//         </input>
//       </div>
//       <div>
//           <label/>
//           <button className="primary" type="submit">Sign In</button>
//       </div>
//       <div>
//           <label/>
//           <div>
//               New Customer?{''}
//               <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
//           </div>
//       </div>
//     </form>
// </div>
    <div>
      
                             
                            <form  className='form' onSubmit={sendEmail}>

                                <div> <h3>Envoyer votre message ici</h3>

                                </div>


                                     <div>
                                    <label htmlFor="name">name </label>
                                    <input type="text" className='form-control' placeholder='nom' name="name">

                                    </input>
                                    </div>
                                   
                                    <div>
                                    <label htmlFor="email">Adresse Email </label>
                                    <input type="text" className='form-control' placeholder='Adresse Email'name="email"></input>
                                    </div>
                                    <div>
                                    <label htmlFor="subject">subject </label>
                                    <input type="text" className='form-control' placeholder='Sujet' name="subject"></input>
                                    </div>
                                    <div>
                                    <label htmlFor="message">message </label>
                                    <input type="textarea" className='form-control' cols="30" rows="8" placeholder='Your message' name="message"></input>
                                    </div>
                                    <div>
                                    <label/>
                                    <input type="submit" className='primary'  value="envoyer message"></input>
                                    </div>
                                  
                                

                                
                              </form>
                            </div>
                         
  )
}
