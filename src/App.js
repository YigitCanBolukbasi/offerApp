import React, { useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { getOffer } from "./Redux/actions/offerActions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    getOffer();
    console.log("we are in");
  }, []);
  console.log(props);
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { offerList: state.offerList };
};

export default connect(mapStateToProps, getOffer)(App);
