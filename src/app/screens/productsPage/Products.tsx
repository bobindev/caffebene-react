import React from "react";

import { Box, Button, Container, Stack, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowFowardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch,useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";


/**REDUX SLICE AND SELECTOR**/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({ products})
);

const products = [
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  
  
];

export default function Products() {

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>

          <Stack className={"avatar-big-box"}>
            <Stack className={"avatar-static-box"}>
              <Box className={"top-text"}>Burak Restaurant</Box>
              <Box className={"search-box"}>
                <input type="text" placeholder="Type here" />
                <Box className={"search-button"}>Search<SearchIcon /></Box>
              </Box>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Button
              variant={"contained"}
              color={"primary"}
              className={"order"}
            >New</Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >Price</Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >Views</Button>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button variant={"contained"} color={"secondary"}>Other</Button>
                <Button variant={"contained"} color={"secondary"}>Dessert</Button>
                <Button variant={"contained"} color={"secondary"}>Drink</Button>
                <Button variant={"contained"} color={"secondary"}>Salad</Button>
                <Button variant={"contained"} color={"primary"}>Dish</Button>

              </div>
            </Stack>
            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src="/icons/shopping-cart.svg"
                            style={{ display: "flex" }} />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon sx={{ color: 20 ? "grey" : "white" }} />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.producName}
                        </span>
                        <div className={"product-title"}><MonetizationOnIcon />{12}</div>
                      </Box>
                    </Stack>
                  )
                })
              ) : (
                <Box className="no-data">Products are not available! </Box>
              )
              }
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            {/* <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
                <PaginationItem
                components={{
                    previous: ArrowBackIcon,
                    next: ArrowFowardIcon,
                }}
                {...item}
                color={"secondary"}
                />
            )}
            /> */}
            <Pagination count={3} color="secondary" />
          </Stack>
        </Stack>
      </Container>

      <div className={"brand-logo"}>
        <Container>
          <Stack className={"main"}>
            <Box className={"category-title"}>Our Family Brands</Box>
            <Stack className="card-frame">
              <Box className={"logo-image"}>
                <img src="/img/gurme.webp" alt="" />
              </Box>
              <Box className={"logo-image"}>
                <img src={"/img/sweets.webp"} />
              </Box>
              <Box className={"logo-image"}>
                <img src={"/img/seafood.webp"} />
              </Box>
              <Box className={"logo-image"}>
                <img src={"/img/doner.webp"} />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?q=Burak%20restaurand%20istanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width={"1320"}
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}