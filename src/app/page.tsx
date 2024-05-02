"use client";

import { Box, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import React from "react";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Home() {
  const cardData = [
    {
      title: "Territories",
      icon: <PublicOutlinedIcon sx={{ fontSize: 50 }} />,
    },
    { title: "Teams", icon: <PeopleAltOutlinedIcon sx={{ fontSize: 50 }} /> },
    { title: "Products", icon: <ViewInArOutlinedIcon sx={{ fontSize: 50 }} /> },
    {
      title: "Policies",
      icon: <TextSnippetOutlinedIcon sx={{ fontSize: 50 }} />,
    },
    {
      title: "Roles",
      icon: <AccountCircleOutlinedIcon sx={{ fontSize: 50 }} />,
    },
  ];

  return (
    <>
      <div className="p-7">
        <h1 className="font-bold text-3xl">Plan Title</h1>
      </div>
      <Grid container spacing={2} padding={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  {card.icon}
                  <Typography className="font-bold text-2xl mt-6">
                    {card.title}
                  </Typography>
                  <Link href="#" underline="none">
                    link for component
                  </Link>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
