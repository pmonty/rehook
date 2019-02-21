import * as React from "react";
import { useEffect, useState } from "react";

export default function Cart(props: { cartItem: any }) {
  let [items, setItems] = useState([]);

  useEffect(() => {
    if (props.cartItem.name) setItems([...items, props.cartItem]);
  }, [props.cartItem]);

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={item.price + Math.random() * i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
