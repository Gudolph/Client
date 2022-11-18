import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>2022 Self Advent Calender</h1>
      <Link to="login">
        <button type="button">로그인</button>
      </Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
};

export default Home;
