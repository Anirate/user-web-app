"use client";

import { Grid } from "@mui/material";
import React from "react";

import CustomCard from "@/components/ui/card";

export default function Reports() {
  const cardData = [
    {
      title: "Report Folder 1",
    },
    {
      title: "Report Folder 2",
    },
    {
      title: "Report Folder 3",
    },
    {
      title: "Report Folder 3",
    },
    {
      title: "Report Folder 4",
    },
  ];

  return (
    <>
      <>
        <div className="p-7">
          <h1 className="font-bold text-3xl">Reports</h1>
        </div>
        <Grid container spacing={2} padding={2}>
          {cardData.map((card, index) => (
            <CustomCard key={index} title={card.title} />
          ))}
        </Grid>
      </>
    </>
  );
}
