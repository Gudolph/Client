import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import styles from "./css/App.module.css";
import "./css/reset.css";
import CustomHome1130 from "./components/CustomHome1130";

const App = () => {
  return (
    <div id={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userHome" element={<CustomHome1130 />} />
      </Routes>
    </div>
  );
};

export default App;
