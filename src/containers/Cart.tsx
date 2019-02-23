import * as React from "react";
import { useState, useEffect } from "react";

export default function Cart(props: any) {
  let [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...items, props.cartItem]);
  }, [props.cartItem]);

  return (
    <div>
      <ul>
        {items.map(
          (item: any) =>
            item.id && (
              <li key={item.id}>
                {item.name} - ${item.price * item.qty}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
