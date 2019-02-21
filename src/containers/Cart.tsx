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

// export default class Cart extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidUpdate(prevProps: any) {
//     if (this.props.cartItem !== prevProps.cartItem)
//       this.setState({ items: [...this.state.items, this.props.cartItem] });
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <div>
//         <ul>
//           {items.map((item: any, i: number) => (
//             <li key={item.price + Math.random() * i}>
//               {item.name} - ${item.price}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
