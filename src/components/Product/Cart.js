import React from 'react';
import  './Cart.css'
import {BsCartFill} from "react-icons/bs"
const Cart = ({product,addName}) => {
    //console.log(props)
   const {name,img,price,ratings}=product
   
  
    //console.log(name)
 

    return (
        <div className='cart'>
       <div className='imgE'>
       <img src={img} alt=''/>
       </div>
       
        <div className='cart-title'>
                <h1>{name}</h1>
                <h3>Price:{price}</h3>
                <h3>Ratings:{ratings}</h3>
                </div>
            <div className='flexK'>
            
            <button onClick={()=>addName(product)} className='btn'>Add To Cart<BsCartFill/></button>

            </div>
        </div>
      
        
    );
};




export default Cart;

