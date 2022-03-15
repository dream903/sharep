import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
export const generateToken=(user)=>{

return jwt.sign({_id:user._id,name:user.name,email:user.email,isAdmin:user.isAdmin},
    `${process.env.JWT_SECRET}` ||'somethingsecret',{
    expiresIn:'30d',
});
};


export const isAuth=(req,res,next)=>{

  // console.log(JSON.stringify( req.headers['authorization'].split(' ')[0]));
  // console.log(JSON.stringify( req.headers['authorization'].split(' ')[1]));
  // console.log(JSON.stringify(req.headers.authorization));

    const authorization=JSON.stringify(req.headers.authorization.split(' ')[1]);
   
    // console.log(authorization);

    if(authorization){

      // console.log("without leading space");
      // console.log(decode1);
        // try{
          const token= req.headers['authorization'].split(' ')[1];
          // console.log(token);
          const decode = jwt_decode(token);
          
          req.user=decode;
          next();
      //  }catch(error){

      //      res.status(401).send({message:'invalid token'});

      // }

        
       
       
        // jwt.verify(token,'somethingsecret',
        //         (err,decode)=>{
        //             if(err){
        //                 res.status(401).send({message:'invalid token'});
        //             }else{
        //                 req.user=decode;
        //                 next();
        //             }
        //         }
        //         );
            }
            else{
                res.status('401').send({message:'No Token'});
            }
        };
  




// export const isAuth=(req,res,next)=>{
//     const authorization=req.headers.Authorization;
//     console.log(authorization);

//     if(authorization){
//         console.log(authorization);

//         const token=authorization.slice(7,authorization.length);
//         console.log(token);
//         if (!token) {
//             throw new Error("Authorization token is required");
//           } 
//          jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
//             if (err) {
//               throw new Error("Error : " + err);
//             }
//             console.log(decoded);
//             req.user=decoded;
//             next();
//             //             next();
//           });
//     //     jwt.verify(token,process.env.JWT_SECRET||'somethingsecret',
//     //     (err,decode)=>{
//     //         if(err){
//     //             res.status(401).send({message:'invalid token'});
//     //         }else{
//     //             req.user=decode;
//     //             next();
//     //         }
//     //     }
//     //     );
//     }
//     else{
//         res.status('401').send({message:'No Token'});
//     }
// };



// export const isAuth=(req,res,next)=>{
//     const authorization=req.headers.authorization;
//     console.log(authorization);

//     if(authorization){
//         const token=authorization.slice(7,authorization.length);
//         console.log(token);
//         jwt.verify(token,process.env.JWT_SECRET||'somethingsecret',
//         (err,decode)=>{
//             if(err){
//                 res.status(401).send({message:'invalid token'});
//             }else{
//                 req.user=decode;
//                 next();
//             }
//         }
//         );
//     }
//     else{
//         res.status('401').send({message:'No Token'});
//     }
// };