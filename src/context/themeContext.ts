"use client";
import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextTYpe = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextTYpe>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;
