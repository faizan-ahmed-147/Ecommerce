import React, { createContext, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./mainComponenet/About";
import Home from "./mainComponenet/Home";
import Products from "./mainComponenet/Products";
import Contact from "./mainComponenet/Contact";
import Cart from "./mainComponenet/Cart";
import SingleProduct from "./mainComponenet/SingleProduct";
import ErrorPage from "./mainComponenet/ErrorPage";
import { GlobalStyle } from "./mainComponenet/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./mainComponenet/Signup"
import Login from "./mainComponenet/Login"
import Logout from "./mainComponenet/Logout";
import { initialState, reducer } from "./mainComponenet/Reducer";
import Reset from './mainComponenet/Reset';
export const UserContext =  createContext();



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "1168px",
    },
  };
  const  [state, dispatch ] = useReducer(reducer, initialState)

  return (
       <UserContext.Provider value={{state , dispatch}}>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
      </UserContext.Provider>
  );
};

export default App;