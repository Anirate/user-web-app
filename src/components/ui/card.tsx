import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

interface CustomCardProps {
  title: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container>
              <Grid item className="grow">
                <FolderOpenOutlinedIcon
                  sx={{ fontSize: 50, color: "#777788" }}
                />
              </Grid>
              <Grid item sx={{ color: "#777788" }}>
                <IconButton>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Typography
              className="font-bold text-2xl mt-6"
              sx={{ color: "#002A3A" }}
            >
              {title}
            </Typography>

            <Grid item className="mt-3 text-[#2F2F37]">
              <Typography className="text-sm">
                Folder Title Description, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default CustomCard;
