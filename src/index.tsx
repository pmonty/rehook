import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

import Cart from "./containers/Cart";
import Products from "./containers/Products";

function App() {
  let [item, setItem] = useState({});

  return (
    <>
      <Products callback={setItem} />
      <Cart cartItem={item} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("example"));
