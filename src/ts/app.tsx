import "../scss/style.scss";
import React from "react";
import ReactDOM from "react-dom";
// import { EnterName } from "./pages/enter-name/EnterName";
import { MakeLayer } from "./pages/make-layer/MakeLayer";

export const hostElement: HTMLDivElement = document.getElementById(
  "app"
)! as HTMLDivElement;

setTimeout(() => {
  new MakeLayer(hostElement);
}, 600);

// const Test = () => {
//   return (
//     <div>
//       <h1>hello world</h1>
//       <p>aaaa</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Test />,
//   hostElement
// )