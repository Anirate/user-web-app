"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Paper, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SimpleTreeView from "@/components/layout/simpleTreeView";
import { ReusableTabs } from "@/components/layout/tab";
import { ItemOneTabData } from ".";

export default function Products() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTreeSelection = (nodeId: string) => {
    // Map node IDs to tab indices
    const nodeToTabMap: { [key: string]: number } = {
      "item-one": 0,
      "item-two": 1,
      "item-three": 2,
    };

    const tabIndex = nodeToTabMap[nodeId];
    if (tabIndex !== undefined) {
      setSelectedTab(tabIndex);
    }
  };

  const treeData = [
    {
      itemId: "tree-item-one",
      label: "Tree Item 1",
      children: [{ itemId: "item-one", label: "Grids" }],
    },
    {
      itemId: "tree-item-two",
      label: "Tree Item 2",
      children: [{ itemId: "item-two", label: "Charts" }],
    },

    {
      itemId: "tree-item-three",
      label: "Tree Item 3",
      children: [{ itemId: "item-three", label: "People" }],
    },
  ];

  return (
    <>
      <Grid container className="flex-row h-screen">
        <Box
          sx={{
            width: isOpen ? 250 : 0,
            overflow: "hidden",
            transition: "width 0.3s ease",
            bgcolor: "slate.100",
            boxShadow: isOpen ? "0px 7px 10px rgba(0, 0, 0, 0.2)" : "none",
          }}
        >
          {isOpen && (
            <SimpleTreeView
              treeData={treeData}
              className="h-full pt-4 px-3"
              onItemSelect={handleTreeSelection}
            />
          )}
        </Box>

        <Grid item className="h-full mt-4 ml-10 mr-7" xs={isOpen ? 9 : 12}>
          <div className="flex flex-row">
            <Grid item>
              <IconButton onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <h1 className="font-bold text-3xl">Products</h1>
            </Grid>
          </div>
          <div className="mt-5">
            <ReusableTabs tabs={ItemOneTabData} selectedIndex={selectedTab} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
