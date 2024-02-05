"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Page = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`w-full h-screen bg-"${theme}"`}>
      <h1>Page</h1>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("blue")}>Blue</button>
    </div>
  );
};

export default Page;
