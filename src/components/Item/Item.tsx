// import * as React from "react";
// import { useState, useEffect, useReducer } from "react";

// import { reducer } from "./reducer";

// export default function Test(props: { compiler: string; framework: string }) {
//   let [state, dispatch] = useReducer(
//     (state, action) => {
//       switch (action.type) {
//         case "INCREMENT":
//           return { increment: true };
//         case "DECREMENT":
//           return { increment: false };
//         default:
//           return state;
//       }
//     },
//     {
//       increment: false
//     }
//   );

//   console.log(state);
//   let count = useCount(state.increment);

//   //   useEffect(() => {
//   //     // Update the document title using the browser API
//   //     document.title = `You clicked ${count} times`;
//   //   });

//   return (
//     <div>
//       {count}
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// }
