import React from "react";
import { Grid } from "@mui/material";

import CustomCard from "@/components/ui/card";

export default function Scenarios() {
  const cardData = [
    {
      title: "Scenario Folder 1",
    },
    {
      title: "Scenario Folder 2",
    },
    {
      title: "Scenario Folder 3",
    },
    {
      title: "Scenario Folder 3",
    },
    {
      title: "Scenario Folder 4",
    },
  ];

  return (
    <>
      <>
        <div className="p-7">
          <h1 className="font-bold text-3xl">Scenarios</h1>
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
