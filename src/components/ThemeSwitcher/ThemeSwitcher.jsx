// src/components/ThemeSwitcher.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { Switch, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./themeSwitcher.scss";

export const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        className={"themeSwitcher__wrapper"}
      >
        <LightModeIcon />
        <Switch
          className={"themeSwitcher__toggle"}
          checked={theme === "dark"}
          onChange={handleToggle}
          color="default"
        />
        <DarkModeIcon />
      </Box>
    </Box>
  );
};
