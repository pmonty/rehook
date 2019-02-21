import * as React from "react";
import * as ReactDOM from "react-dom";

import Cart from "./containers/Cart";
import Products from "./containers/Products";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      item: {},
      quantity: 0
    };
  }

  handleItemChange = (item: any) => {
    this.setState({ item });
  };

  render() {
    const { item } = this.state;
    return (
      <>
        <Products setItemCallback={this.handleItemChange} />
        <Cart cartItem={item} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("example"));
