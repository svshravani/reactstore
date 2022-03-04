import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Main from "./Components/Main";

import { toast } from "react-toastify";
import Data from "./Components/Data";
import Addons from "./Components/Addons";
import Cart from "./Components/Cart";

const App = () => {
  const {products} = Data;
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })
    if(isAlreadyAdded != -1){
      toast("already added in the cart", {
        type:"error"
      })
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase complete", {
      type: "success"
    })
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  }

  return (
    <div>
    <Main products={products} addInCart={addInCart}/>
    <Cart cartItem={cartItem} removeItem={removeItem}/>
    </div>
  );
}

 export default App;
