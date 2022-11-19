import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
//css
import styles from "../css/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["cookies"]); //쿠키
  //const [searchParams, setSearchParams] = useSearchParams();
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://127.0.0.1:8000/accounts/login/", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("성공");
          console.log(res.data);
          //username: res.data.user.username
          //email: res.data.user.email
          setCookie("cookies", res.data.access_token); //쿠키에 토큰 저장
        });
      console.log(cookies);
      alert("환영합니다");
      setTimeout(() => {
        navigate("/userHome");
      }, 1000);
    } catch (e) {
      alert("로그인을 다시 시도해주십시오.");
      console.log(e.response.data);
    }
  };

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
      <form onSubmit={submit} id={styles.loginform}>
        <p className={styles.formelement}>
          <label htmlFor="username">아이디를 입력해주세요</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          ></input>
        </p>
        <p className={styles.formelement}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </p>
        <p className={styles.formelement}>
          <label htmlFor="password1">비밀번호를 입력해주세요</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit" id={styles.loginBT}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
