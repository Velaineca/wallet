import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
//SZABLON
const szablon = createTheme({
    //KOLORY
    palette:{
        primary:{
            main:"#FFA412",
        },
        secondary:{
            main:"#ECECEC",
        },
    },
    //CZCIONKA
    typography:{
        h1:{
            fontSize:"3.9rem",
            fontWeight:900,
            fontFamily:"Catamaran",
        },
        h2:{
            fontSize:"1.75rem",
            fontWeight:800,
            fontFamily:"Catamaran",
        },
        h3:{
            fontSize:"1.15rem",
            fontWeight:700,
            fontFamily:"Catamaran",
        },
        subtitle1:{
            fontSize:"1.5rem",
            fontWeight:800,
            fontFamily:"Catamaran",
        },
        inherit:{
            fontSize:"1.2rem",
            fontWeight:400,
            fontFamily:"Catamaran",
        },
    },
})
//FUNDAMENT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={szablon}>
    <App />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
