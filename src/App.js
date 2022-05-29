import React, { useEffect } from "react";
import "./App.css";
import { getOffer } from "./Redux/actions/offerActions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/NavBar";
import TabPanel from "./Components/Tab";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TabPanel />
    </div>
  );
}

export default App;
