import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Mypage from "./components/MyPage";
import PrivateRoute from "./routes/PrivateRoute";
import styles from "./css/App.module.css";
import "./css/reset.css";

const App = () => {
  return (
    <div id={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* 인증이 필요한 컴포넌트느 PrivateRoute 컴포넌트를 사용한다. */}
        <Route
          path="/mypage"
          element={<PrivateRoute path="/mypage" component={Mypage} />}
        />
      </Routes>
    </div>
  );
};

export default App;
