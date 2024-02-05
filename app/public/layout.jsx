"use client";
import React from "react";
import { ThemeProvider } from "../context/ThemeContext";

const layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default layout;
