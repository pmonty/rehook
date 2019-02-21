import * as React from "react";

export default function Products(props: { setItemCallback: ({}) => void }) {
  return (
    <div>
      <button
        onClick={() => props.setItemCallback({ name: "Apple", price: 3 })}
      >
        Buy Apple
      </button>
      <button
        onClick={() => props.setItemCallback({ name: "Banana", price: 5 })}
      >
        Buy Banana
      </button>
    </div>
  );
}
