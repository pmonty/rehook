import { useState, useEffect } from "react";

let useCount = (inc: boolean) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (inc) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }, [inc]); // will only update if state has changed

  return count;
};

export default useCount;
