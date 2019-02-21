import * as React from "react";

import Product from "../components/Product";

import data from "../data/data";

interface IProductsProps {
  setItemCallback: ({}) => void;
}

export default class Products extends React.Component<IProductsProps, any> {
  constructor(props: IProductsProps) {
    super(props);

    this.state = {
      items: null
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    const { setItemCallback } = this.props;
    const { items } = this.state;

    return (
      <div className="row">
        {items &&
          items.map((item: any) => {
            return (
              <Product
                product={item}
                callback={setItemCallback}
                key={item.id}
              />
            );
          })}
      </div>
    );
  }
}
