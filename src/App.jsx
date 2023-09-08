import React from 'react'
import Heading from "./componets/heading";
import Paragraph from "./componets/paragraph";
const ReactDom = require("react-dom");

function App() {
  return ReactDom.render(
    <div>
    <Heading />
    <Paragraph/>
    </div>
    , document.getElementById("root")
    ); 
}

export default App