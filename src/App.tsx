import React from "react";
import "./App.css";
import Theming from "./Components/Theming";
import Mobile from "./Components/Navbar/Mobile";
import Header from "./Components/Header/Index";
import Featured from "./Components/Featured/Featured";
import Experience from './Components/Experience/Experience'
import Stack from './Components/Stack/Stack'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Theming>
      <Mobile />
      <Header/>
      <Featured/>
      <Experience/>
      <Stack/>
      <Footer/>
    </Theming>
  );
}

export default App;
