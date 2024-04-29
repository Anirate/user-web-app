"use client";

import React from "react";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold" href="#">
            Anirate
          </a>
        </div>
      </header>
      <Button variant="contained" className="bg-red-600">
        Button
      </Button>
      <Button variant="contained" className="bg-orange-400 ml-9">
        Second Button
      </Button>
    </>
  );
}
