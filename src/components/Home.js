import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styles from "../css/Home.module.css";

const Home = () => {
  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
      <div id={styles.gologin}>
        <Link to="login">
          <button type="button" id={styles.loginBT}>
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <span id={styles.signupLink}>회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
