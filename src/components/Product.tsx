import * as React from "react";

interface IProductProps {
  product: any;
  callback: ({}) => void;
}

export default class Product extends React.Component<IProductProps, any> {
  constructor(props: IProductProps) {
    super(props);

    this.state = {
      quantity: 1
    };
  }

  handleQuantityChange = (e: { target: HTMLInputElement }) => {
    this.setState({ quantity: e.target.value });
  };

  handleQuantityIncDec = (inc: boolean) => {
    const diff = inc ? 1 : -1;
    this.setState((prevState: any) => ({
      quantity: prevState.quantity + diff
    }));
  };

  render() {
    const { quantity } = this.state;
    const { callback, product } = this.props;
    const { name, price } = product;

    return (
      <div className="col-md-4">
        <p>{name}</p>
        <p>${price}</p>
        <br />
        <button onClick={() => this.handleQuantityIncDec(false)}>-</button>
        <input value={quantity} onChange={this.handleQuantityChange} disabled />
        <button onClick={() => this.handleQuantityIncDec(true)}>+</button>
        <br />
        <button onClick={() => callback({ name, price, quantity })}>
          Add To Cart
        </button>
      </div>
    );
  }
}
