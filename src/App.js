import React, { Component } from "react";
import CardComponents from "./Component/CardComponents";
import NavbarComponent from "./Component/NavbarComponent";
import FooterComponent from "./Component/FooterComponent";
import HeroComponent from "./Component/HeroComponent";

export class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <HeroComponent />
        <CardComponents />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
