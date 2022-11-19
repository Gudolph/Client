import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LetterForm from "./components/LetterForm";
import CreateCalender from "./components/CreateCalender";
import Calender from "./components/calender";
import Calender2 from "./components/calender2.js";
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
        <Route path="/create" element={<CreateCalender />} />
        <Route path="/letterform" element={<LetterForm />} />
        <Route path="/userHome" element={<CustomHome1130 />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/calender2" element={<Calender2 />} />
      </Routes>
    </div>
  );
};

export default App;
