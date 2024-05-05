"use client";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type CustomDividerProps = {
  title: string;
};

export default function Home() {
  const cardData = [
    {
      title: "Territories",
      icon: <PublicOutlinedIcon sx={{ fontSize: 50, color: "#777788" }} />,
      href: "/products",
    },
    {
      title: "Teams",
      icon: <PeopleAltOutlinedIcon sx={{ fontSize: 50, color: "#777788" }} />,
      href: "/products",
    },
    {
      title: "Products",
      icon: <ViewInArOutlinedIcon sx={{ fontSize: 50, color: "#777788" }} />,
      href: "/products",
    },
    {
      title: "Policies",
      icon: <TextSnippetOutlinedIcon sx={{ fontSize: 50, color: "#777788" }} />,
      href: "/products",
    },
    {
      title: "Roles",
      icon: (
        <AccountCircleOutlinedIcon sx={{ fontSize: 50, color: "#777788" }} />
      ),
      href: "/products",
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
                  <Typography
                    className="font-bold text-2xl mt-6"
                    sx={{ color: "#002A3A" }}
                  >
                    {card.title}
                  </Typography>
                  <CustomDivider title={card.title} />
                  <Grid item className="mt-3" sx={{ color: "#2A646f" }}>
                    <Link
                      href={card.href}
                      underline="none"
                      sx={{ color: "#2A646f", marginRight: "1rem" }}
                    >
                      Go to {card.title}
                    </Link>
                    <KeyboardDoubleArrowRightIcon />
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const CustomDivider: React.FC<CustomDividerProps> = ({ title }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const titleWidth = title.length * 12;
    setWidth(titleWidth);
  }, [title]);

  return (
    <div className="h-1 bg-orange-500" style={{ width: `${width}px` }}></div>
  );
};
