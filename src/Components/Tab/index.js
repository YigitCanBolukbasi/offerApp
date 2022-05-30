import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../OfferCard";
import CircularProgress from "@mui/material/CircularProgress";

import {
  getOfferTwo,
  getOffer,
  getOfferThree,
} from "../../Redux/actions/offerActions";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_OFFER } from "../../Redux/type";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ offer }) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(getOffer());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      dispatch({
        type: DELETE_OFFER,
      });
      dispatch(getOffer());
    } else if (newValue === 1) {
      dispatch({
        type: DELETE_OFFER,
      });
      dispatch(getOfferTwo());
    } else if (newValue === 2) {
      dispatch({
        type: DELETE_OFFER,
      });
      var times = 3;
      for (var i = 0; i < times; i++) {
        dispatch(getOfferThree());
      }
    }
  };

  const {
    caseOneOfferList: { offerList: caseOneOfferList },
    caseTwoOfferList: { offerList: caseTwoOfferList },
  } = useSelector((state) => state.offerLists);

  const { caseThreeOffer } = useSelector((state) => state.offerLists);
  console.log(caseThreeOffer);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Offer One" {...a11yProps(0)} />
          <Tab label="Offer Two" {...a11yProps(1)} />
          <Tab label="Offer Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {caseOneOfferList &&
          caseOneOfferList.map((item) => <Card offerOne={item} />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {caseTwoOfferList ? (
          caseTwoOfferList.map((item) => <Card offerOne={item} />)
        ) : (
          <CircularProgress />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {caseThreeOffer ? (
          caseThreeOffer.map((item) => <Card offerOne={item} />)
        ) : (
          <CircularProgress />
        )}
      </TabPanel>
    </Box>
  );
}
