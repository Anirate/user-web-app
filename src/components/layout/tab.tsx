// src/components/ReusableTabs.tsx

import React, { useEffect, useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";

interface TabContent {
  label: string;
  content: React.ReactNode;
}

interface ReusableTabsProps {
  tabs: TabContent[];
  selectedIndex?: number;
}

const ReusableTabs: React.FC<ReusableTabsProps> = ({ tabs, selectedIndex }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (selectedIndex !== undefined) {
      setValue(selectedIndex);
    }
  }, [selectedIndex]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="customizable tabs"
        >
          {tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          key={index}
          className="mt-5"
        >
          {value === index ? tab.content : null}
        </div>
      ))}
    </Box>
  );
};

export { ReusableTabs };
