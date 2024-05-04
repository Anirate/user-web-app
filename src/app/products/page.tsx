"use client";

import React, { useState } from "react";
import { Box, Grid, IconButton, Paper, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SimpleTreeView from "@/components/layout/simpleTreeView";
import { ReusableTabs } from "@/components/layout/tab";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const treeData = [
    {
      itemId: "grid",
      label: "Data Grid",
      children: [
        { itemId: "grid-community", label: "@mui/x-data-grid" },
        { itemId: "grid-pro", label: "@mui/x-data-grid-pro" },
        { itemId: "grid-premium", label: "@mui/x-data-grid-premium" },
      ],
    },
    {
      itemId: "pickers",
      label: "Date and Time Pickers",
      children: [
        { itemId: "pickers-community", label: "@mui/x-date-pickers" },
        { itemId: "pickers-pro", label: "@mui/x-date-pickers-pro" },
        {
          itemId: "charts",
          label: "Grid 3",
          children: [
            { itemId: "pickers-community-two", label: "date-pickers" },
          ],
        },
      ],
    },
  ];

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const tabData = [
    {
      label: "Tab 1",
      content: (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <Paper elevation={3}>
          <Stack direction="row" sx={{ width: "100%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <SparkLineChart
                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                height={100}
                colors={["#F06D42"]}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <SparkLineChart
                plotType="bar"
                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                height={100}
                colors={["#F06D42"]}
              />
            </Box>
          </Stack>
        </Paper>
      ),
    },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
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
            <SimpleTreeView treeData={treeData} className="h-full pt-4 px-3" />
          )}
        </Box>

        <Grid item className="h-full mt-4 ml-3" xs={isOpen ? 9 : 12}>
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
            <ReusableTabs tabs={tabData} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
