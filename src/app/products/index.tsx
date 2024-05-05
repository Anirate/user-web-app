import CustomCard from "@/components/ui/card";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { BarChart, PieChart, SparkLineChart } from "@mui/x-charts";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

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
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
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

const cardData = [
  {
    title: "Person 1",
  },
  {
    title: "Person 2",
  },
  {
    title: "Person 3",
  },
  {
    title: "Person 3",
  },
  {
    title: "Person 4",
  },
];

export const ItemOneTabData = [
  {
    label: "Data Grid",
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
    label: "Charts",
    content: (
      <>
        <Grid className="mt-10">
          <Paper elevation={3}>
            <Typography className="py-3 px-3 font-semibold">
              Data Set 1
            </Typography>

            <Stack direction="row" sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                  data={[1, 4, 2, 5, 7, 2, 4, 6]}
                  height={100}
                  colors={["#F06D42"]}
                  showTooltip
                  showHighlight
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                  plotType="bar"
                  data={[1, 4, 2, 5, 7, 2, 4, 6]}
                  height={100}
                  colors={["#F06D42"]}
                  showTooltip
                  showHighlight
                />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid className="mt-10">
          <Paper elevation={3}>
            <Typography className="py-3 px-3 font-semibold">
              Data Set 2
            </Typography>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={900}
              height={300}
            />
          </Paper>
        </Grid>
      </>
    ),
  },
  {
    label: "People",
    content: (
      <Grid container spacing={2} padding={2}>
        {cardData.map((card, index) => (
          <CustomCard key={index} title={card.title} />
        ))}
      </Grid>
    ),
  },
];
