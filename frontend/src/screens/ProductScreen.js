import React, { useEffect } from 'react';
import { Link} from "react-router-dom";
import { useParams } from 'react-router';
import {  useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { detailsProduct } from '../actions/productActions';
// import { useNavigate } from "react-router-dom";

export default function ProductScreen(props) {
  const navigate=useNavigate();

  // const  history = useHistory();
  const { id } = useParams();

const dispatch=useDispatch();
// const [qty,setQty]=useState(1);
// const productId=id;
// props.match.params.id;
const productDetails=useSelector(state=>state.productDetails);
const {loading , error, product}=productDetails;

useEffect(() => {
  dispatch(detailsProduct(id))

}, [dispatch,id]);



    return ( 
      <div>
        {loading?(
          <LoadingBox></LoadingBox>
        ):error?(<MessageBox variant="danger">{error}</MessageBox>)
        :(
          <div>
              <Link to="/projet">Back to result</Link>
              <div className='row topar'>
                <div className="col-3">
                  <img className="largead
                  " src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                  <ul>

                    <li>
                    {/* <strong>Designation:</strong>   */}
                      {/* <h1>{product.name}</h1> */}
                    </li>
                  
               
                    {/* <li>
                      <strong>Description:</strong>
                      <p>{product.description}</p>
                    </li>
                    <li>
                    <strong>Outils:</strong>
                      <p>{product.outils}</p>
                    </li> */}
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>

                    <li>
                        <div className="row">
                          <div><strong><span> Designation: </span></strong></div>
                          <div className="outils">{product.name}</div>
                         
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div> <strong>outils  :</strong></div>
                          <div className="outils">{product.outils}</div>
                         
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          
                          <div> <strong>description:</strong></div>
                          <div className="outils">{product.description}</div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="row">
                          
                          <div> <strong>lien:</strong></div>
                          <Link to= {`/${product.lien}`                       
                           }>lien Git</Link>
                        </div>
                      </li>
                    </ul>
                    <Link to="/projet">Back to result</Link>

                  </div>
                </div>
              </div>
        </div>
        )
  
      }

    </div>
    );
  
  
}

// const checkoutHandler=()=>{
//   // props.history.push('/signin?redirect=shipping')
//   const paramsString = '/signin?redirect=shipping';
//   // var searchParams = new URLSearchParams(paramsString);
//   // console.log(redirectInUrl);
//   const redirectInUrl =  new URLSearchParams(paramsString);
//   // new URLSearchParams('/signin?redirect=shipping').get('redirect');
  
//   // const redirect = redirectInUrl?redirectInUrl:1;
//   console.log(redirectInUrl);
//   // navigate(`/signin?redirect=shipping`);
//   navigate(`/signin?redirect=shipping`)
//   }
  