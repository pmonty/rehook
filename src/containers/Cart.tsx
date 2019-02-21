import * as React from "react";

export default class Cart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.cartItem !== prevProps.cartItem) {
      this.setState((prevState: any, props: any) => ({
        items: [...prevState.items, props.cartItem]
      }));
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <ul>
          {items.map((item: any, i: number) => (
            <li key={item.price + Math.random() * i}>
              {item.name} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
