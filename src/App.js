import React, { useEffect } from "react";
import "./App.css";
import { getOffer } from "./Redux/actions/offerActions";
import { connect } from "react-redux";
import NavBar from "./Components/NavBar";
import TabPanel from "./Components/Tab";

function App(props) {
  useEffect(() => {
    getOffer();
  }, []);
  const offerOne = props.offerList.offerList.offerList;

  return (
    <div className="App">
      <NavBar />
      <TabPanel offer={offerOne} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { offerList: state.offerList };
};

export default connect(mapStateToProps, getOffer)(App);
