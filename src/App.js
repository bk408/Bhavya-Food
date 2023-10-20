
import React from "react";
import  ReactDOM  from "react-dom/client";


const Title = () => <h1 id="head">Namaste React using JSX 🚀</h1>;
const tips = <h1>Hello Bhavya </h1>;

const number = 1000;

// Component composition
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h1>{number}</h1>
    <h1>{500 + 450}</h1>
    {tips}
    {tips}
    {tips}
    <h1 className="head">
      Namaste React Functional Component while using multiple lines{" "}
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent2 />);