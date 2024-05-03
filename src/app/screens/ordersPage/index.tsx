import React, { SyntheticEvent, useEffect, useState } from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrder, setFinishedOrder } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/order";
import "../../../css/order.css";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

/**REDUX SLICE AND SELECTOR**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrder: (data: Order[]) => dispatch(setProcessOrder(data)),
  setFinishedOrder: (data: Order[]) => dispatch(setFinishedOrder(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrder, setFinishedOrder } =
    actionDispatch(useDispatch);
  const { orderBuilder, authMember } = useGlobals();
  const history = useHistory();
  const [value, setValue] = useState("1");
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrder(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrder(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /**HANDLERS**/

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!authMember) history.push("/");
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDER" value={"1"} />
                  <Tab label="PROCESS ORDER" value={"2"} />
                  <Tab label="FINISHED ORDER" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="oreder-main-context">
              <PausedOrders setValue={setValue} />
              <ProcessOrders setValue={setValue} />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src={
                    authMember?.memberImage
                      ? `${serverApi}/${authMember.memberImage}`
                      : "/icons/default-user.svg"
                  }
                  alt=""
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src={authMember?.memberType === MemberType.RESTAURANT
                      ? "/icons/restaurant.svg"
                      : "/icons/user-badge.svg"}
                    alt=""
                    className="order-user-prof-img"
                  />
                </div>
              </div>
              <span className="order-user-name">{authMember?.memberNick}</span>
              <span className="order-user-prof">{authMember?.memberType}</span>
            </Box>
            <div className="liner"></div>
            <Box className="liner"></Box>
            <Box className="order-user-address">
              <div style={{ display: "flex" }} className="spec-address-txt">
                <LocationOnIcon /> {authMember?.memberAddress
                    ? authMember.memberAddress
                    : "Do not exist"}
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
              <img
                src="/icons/western-card.svg"
                alt=""
                className="card-icon-img"
              />
              <img
                src="/icons/master-card.svg"
                alt=""
                className="card-icon-img"
              />
              <img
                src="/icons/paypal-card.svg"
                alt=""
                className="card-icon-img"
              />
              <img
                src="/icons/visa-card.svg"
                alt=""
                className="card-icon-img"
              />
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
