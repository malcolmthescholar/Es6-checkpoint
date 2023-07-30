import React, { Fragment } from "react";
import Navpath from "./Component/Navpath";
import Cards from "./Component/Cards";
import Heading from "./Component/Heading";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navpath />
        <br />
        <Heading />
        <br />
        <br />
        <section className="cardsec">
          <div className="cards">
            <Cards />
          </div>
          <div className="cards">
            <Cards />
          </div>
          <div className="cards">
            <Cards />
          </div>
        </section>

        <br />
      </div>
    </>
  );
}

export default App;
