import React, { SyntheticEvent, useState } from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrder, setFinishedOrder } from "./slice";
import { Order } from "../../../lib/types/order";
import "../../../css/order.css";


/**REDUX SLICE AND SELECTOR**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcesOrder: (data: Order[]) => dispatch(setProcessOrder(data)),
  setFinishedOrder: (data: Order[]) => dispatch(setFinishedOrder(data)),
});

export default function OrdersPage() {

  const {setPausedOrders, setProcesOrder, setFinishedOrder} = actionDispatch(useDispatch);
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list">
                  <Tab label="PAUSED ORDER" value={"1"} />
                  <Tab label="PROCESS ORDER" value={"2"} />
                  <Tab label="FINISHED ORDER" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="oreder-main-context">
              <PausedOrders/>
              <ProcessOrders/>
              <FinishedOrders/>
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img src="/icons/default-user.svg" alt="" className="order-user-avatar" />
                <div className="order-user-icon-box">
                  <img src="/icons/user-badge.svg" alt="" className="order-user-prof-img" />
                </div>
              </div>
              <span className="order-user-name">Martin</span>
              <span className="order-user-prof">USER</span>
            </Box>
            <div className="liner"></div>
            <Box className="liner" >

            </Box>
            <Box className="order-user-address">
              <div style={{ display: "flex" }} className="spec-address-txt">
                <LocationOnIcon /> Do not exist
              </div>
            </Box>
          </Box>
          <div className="order-pay-box">

            <div className="first-row">
              <div className="card-number">
                <div className="input-field">
                  <input type="text" placeholder="Card number" />
                </div>
              </div>
            </div>

            <div className="second-row">
              <div className="ex-date">
                <div className="input-field">
                  <input type="text" placeholder="Expired date" />
                </div>
              </div>
              <div className="cvv">
                <div className="input-field">
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>

            <div className="third-row">
              <div className="owner">
                <div className="input-field">
                  <input type="text" placeholder="Full Name" />
                </div>
              </div>
            </div>

            <div className="card-icon">
              <img src="/icons/western-card.svg" alt="" className="card-icon-img" />
              <img src="/icons/master-card.svg" alt="" className="card-icon-img" />
              <img src="/icons/paypal-card.svg" alt="" className="card-icon-img" />
              <img src="/icons/visa-card.svg" alt="" className="card-icon-img" />
            </div>

          </div>

        </Stack>
      </Container>
    </div>

  )

}