import React, { Fragment, useState} from "react";
import Header from "./header/Header";
import Cart from "./cart/cart";

function App() {
  const [cartShow,setCartshow] = useState(false);
  const Showcart = () => {
    setCartshow(true);
  }
  const hidecart = () => {
    setCartshow(false)
  }
 
  return (
    <Fragment>
      {cartShow && <Cart onclose={hidecart} />}
      <Header onShowcart={Showcart} />
    </Fragment>
  );
}

export default App;
