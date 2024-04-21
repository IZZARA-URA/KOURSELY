import React from 'react';
import { 
  BrowserRouter, 
  Navigate, 
  Routes, 
  Route 
} from "react-router-dom"

import './App.css';

import { useMemo } from "react";
import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { themeSettings } from "./theme";

import NavBar from './components/navbar'
import HomePage from './pages/Home'

function App() {
  const mode = 'dark'
  const theme = useMemo(() => createTheme(
    themeSettings(mode)
  ), [mode])

  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
