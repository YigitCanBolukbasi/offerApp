import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../OfferCard";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

import {
  getOfferTwo,
  getOffer,
  getOfferThree,
} from "../../Redux/actions/offerActions";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CASE_THREE_OFFER_LİST } from "../../Redux/type";

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
  const [totalOfferCount, setTotalOfferCount] = React.useState();

  useEffect(() => {
    dispatch(getOffer());
  }, []);

  const sendGetOfferCount = async () => {
    try {
      const resp = await axios.get(
        "https://snetmyapp.herokuapp.com/get_offer_count"
      );
      const Count = resp.data.num_offers;
      setTotalOfferCount(resp.data);
      for (let i = 0; i < Count; i++) {
        dispatch(getOfferThree());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const {
    caseOneOfferList: { offerList: caseOneOfferList },
    caseTwoOfferList: { offerList: caseTwoOfferList },
  } = useSelector((state) => state.offerLists);

  const { caseThreeOfferList } = useSelector((state) => state.offerLists);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      dispatch({
        type: DELETE_CASE_THREE_OFFER_LİST,
      });
      dispatch(getOffer());
    } else if (newValue === 1) {
      dispatch({
        type: DELETE_CASE_THREE_OFFER_LİST,
      });
      dispatch(getOfferTwo());
    } else if (newValue === 2) {
      dispatch({
        type: DELETE_CASE_THREE_OFFER_LİST,
      });
      sendGetOfferCount();
    }
  };
  const handleCaseThreeOffer = () => {
    caseThreeOfferList.sort((a, b) => parseFloat(a.Cash) - parseFloat(b.Cash));
    return caseThreeOfferList.map((item) => {
      return <Card offerOne={item} />;
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="case 1" {...a11yProps(0)} />
          <Tab label="case 2" {...a11yProps(1)} />
          <Tab label="case 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {caseOneOfferList && `${caseOneOfferList.length} Sonuç Bulundu`}
        {caseOneOfferList &&
          caseOneOfferList.map((item) => <Card offerOne={item} />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {caseTwoOfferList && `${caseTwoOfferList.length} Sonuç Bulundu`}
        {caseTwoOfferList ? (
          caseTwoOfferList.map((item) => <Card offerOne={item} />)
        ) : (
          <CircularProgress />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {totalOfferCount?.num_offers &&
          `${totalOfferCount.num_offers} Sonuç Bulundu`}
        {caseThreeOfferList && handleCaseThreeOffer()}
        {caseThreeOfferList?.length < totalOfferCount?.num_offers && <Card />}
      </TabPanel>
    </Box>
  );
}
