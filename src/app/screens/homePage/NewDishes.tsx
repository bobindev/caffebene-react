import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { useHistory } from "react-router-dom";

/**REDUX SLICE AND SELECTOR**/

const newDishesRetriever = createSelector(
  retrieveNewDishes, 
  (newDishes) => ({newDishes}));


export default function PopularDishes() {
  const {newDishes} = useSelector(newDishesRetriever);
  console.log("popularDishes:", newDishes);
  const history = useHistory(); // Move useHistory inside the function component

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

    return (
        <div className="new-products-frame">
            <Container>
                <Stack className="main">
                    <Box className="category-title">
                        Fresh Menu</Box>
                    <Stack className="card-frame">
                        <CssVarsProvider>
                            {newDishes.length !== 0 ? (
                                newDishes.map((product: Product) => {
                                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                                  const sizeVolume = product.productCollection === ProductCollection.FRUITJUICE ? product.productVolume + "l" : product.productSize + " size";
                                    return (
                                        <Card key={product._id} 
                                        onClick={() => chooseDishHandler(product._id)} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <div className="product-sale">{sizeVolume}</div>
                                                <AspectRatio ratio="1">
                                                    <img src={imagePath} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>

                                            <CardOverflow variant="soft" className="product-detail">
                                                <Stack className="info">
                                                    <Stack flexDirection={"row"}>
                                                        <Typography className={"title"}>
                                                            {product.productName}
                                                        </Typography>
                                                        <Divider width="2" height="24" bg="#d9d9d9" />
                                                        <Typography className={"price"}>
                                                            ${product.productPrice}
                                                        </Typography>
                                                    </Stack>
                                                    <Stack>
                                                        <Typography className={"views"}>
                                                            {product.productViews}
                                                            <VisibilityIcon
                                                                sx={{ fontSize: 20, marginLeft: "5px" }}
                                                            />
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </CardOverflow>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Box className="no-data">New products are not available! </Box>

                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}