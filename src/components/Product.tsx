import * as React from "react";
import { useState } from "react";

interface IProductProps {
  product: any;
  callback: ({}) => void;
}

export default function Product(props: IProductProps) {
  const { callback, product } = props;
  const { name, price } = product;

  let [qty, setQuantity] = useState(1);

  return (
    <div className="col-md-4">
      <p>{name}</p>
      <p>${price}</p>
      <br />

      <button onClick={() => setQuantity(--qty)}>-</button>
      <input value={qty} disabled />
      <button onClick={() => setQuantity(++qty)}>+</button>
      <br />

      <button onClick={() => callback({ ...product, qty })}>Add To Cart</button>
    </div>
  );
}
