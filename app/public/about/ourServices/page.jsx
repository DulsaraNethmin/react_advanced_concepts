"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Page = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
};

export default Page;
