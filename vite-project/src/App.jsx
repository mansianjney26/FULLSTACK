import { useState } from 'react'
import Header from './components/Header'
import Laptop from './assets/Laptop.png'
import Mobile from './assets/Mobile.png'
import Charger from './assets/Charger.png'
import ProductList from './components/productList'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(product){
    setCart([...cart, product]);
  }

  const product=[
    {
      id:1,
      name:"Laptop",
      price:5000,
      image: Laptop
    },
    {
      id:2,
      name:"Mobile",
      price:2000,
      image: Mobile
    },
    {
      id:3,
      name:"Charger",
      price:1000,
      image: Charger
    }
  ]
  function addToCart(product)
{
  setCart([...cart,product]);
  setAmt(totalAmt+product.price);
}

function removeFromCart(index)
{
const updatedCart=cart.filter((_,i)=>i!==index);
setCart(updatedCart)
}


  return(
    <div className='container'>
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart}/>
      <Cart totalAmt={totalAmt} cart={cart} removeFromCart={removeFromCart}/>
    </div>
  );

}
export default App


//   // function removeFromCart(index){
//   //   const updatecart=cart.filter((_,i)=>i!=index);
//   //   setCart(updatecart);
//   // }
//   const totalAmount=cart.reduce((total,index)=>(total+index.price,0));
//   return (
//     <div>
//       <Header cartCount={cart.length} />
//       <ProductList />
//       <cart />
//     </div>
//   );
// }

// export default App
// import { useEffect} from "react";
// import './App.css'
// function app(){
//   useEffect(()=>{console.log("Welcome")},[])
//   return(
//     <>
//     <h1>My app</h1>
//     </>
//   )
// }

