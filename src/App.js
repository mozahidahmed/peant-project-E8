import React, { useEffect, useState } from 'react';
import Cart from './components/Product/Cart';
import Title from './components/Title/Title';
import './App.css'
import Hisab from './components/Shop/Hisab';


const App = () => {
  const [product,setProduct]=useState([]);
   const [cart,setCart]=useState([]);
console.log(cart)


  const addName=(product)=>{
    const newCart=[...cart,product];
    console.log(newCart)
    setCart(newCart);
}






useEffect(()=>{
fetch("product.json")
.then(res=>res.json())
.then(data=>setProduct(data))

},[])


  return (
    <div>
      <Title></Title>
         <div className="">
         
         
         </div>

          <div  className="gridK">  
          <div className="gridMO">
          {
          product.map((product)=>(
          <Cart key={product.id} product={product} addName={addName}></Cart>

          ))}

          </div>
          <div className='hisab'>
          {
             cart.map((item)=>(
            <h3 key={item.id} >{item.name}</h3>

              ))

           } 
<div className='BTNMO'>
<button className='bTN'>Chose for 1 me</button>

</div>
<div>
<button className='bTN'>Chose for again</button>
</div>
         
        
</div>
         
</div>

   
 </div>
  );
};




export default App;