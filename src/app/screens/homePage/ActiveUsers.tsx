import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from '@mui/joy/Card';
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { Css } from "@mui/icons-material";

const activeUsers = [
    { memberNick: "Martin", imagePath: "/img/martin.webp" },
    { memberNick: "Justin", imagePath: "/img/justin.webp" },
    { memberNick: "Rose", imagePath: "/img/rose.webp" },
    { memberNick: "Nusret", imagePath: "/img/nusret.webp" }
];


export default function ActiveUsers() {
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"card-frame"}>
                        <CssVarsProvider>
                            {activeUsers.length !== 0 ? (
                                activeUsers.map((ele, index) => {
                                    return (
                                        <Card key={index} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <AspectRatio ratio="1">
                                                    <img src={ele.imagePath} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>

                                            <CardOverflow variant="soft" className="member-nickname">
                                                <Stack className="info">
                                                    <Typography className={"title"}>
                                                        {ele.memberNick}
                                                    </Typography>
                                                </Stack>
                                            </CardOverflow>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Box className="no-data">No Active Users! </Box>
                            )
                            }
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div >
    );
}