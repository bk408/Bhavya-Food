
import React from "react";
import  ReactDOM  from "react-dom/client";




const heading = React.createElement("h1", {}, "Hello, This is my practice session");

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)