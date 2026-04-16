import React from "react";
import Carousel from "./Carousel";
import Accordion from "./Accordion";
import Shop from "./Shop";

function App() {
  return (
    <div>
      <h1>My React Project</h1>

      <Carousel />
      <hr />

      <Accordion />
      <hr />

      <Shop />
    </div>
  );
}

export default App;