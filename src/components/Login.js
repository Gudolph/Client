import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/reducers/AuthReducer";
//css
import styles from "../css/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        username: username,
        email: email,
        password: password,
      });
      dispatch(setToken(data.jwt));
      alert("환영합니다");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (e) {
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
        <p class={styles.formelement}>
          <label htmlFor="username">아이디를 입력해주세요</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          ></input>
        </p>
        <p class={styles.formelement}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </p>
        <p class={styles.formelement}>
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
