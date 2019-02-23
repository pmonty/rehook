import * as React from "react";
import { useState, useEffect } from "react";

import Product from "../components/Product";

import data from "../data/data";

interface IProductsProps {
  callback: ({}) => void;
}

export default function Products(props: IProductsProps) {
  let [items, setItems] = useState(null);

  useEffect(() => {
    setItems(data);
  });

  return (
    <div className="row">
      {items &&
        items.map((item: any) => {
          return (
            <Product product={item} callback={props.callback} key={item.id} />
          );
        })}
    </div>
  );
}
