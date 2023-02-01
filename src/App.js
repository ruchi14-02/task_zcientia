import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideMenu from "./Component/SideMenu";

function App() {
  return (
    <BrowserRouter>
    <section className="background">
    <SideMenu />

    </section>
    </BrowserRouter>
  );
}

export default App;
