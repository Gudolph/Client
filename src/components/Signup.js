import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//css
import styles from "../css/Signup.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  //회원가입이 완료되면 로그인 화면으로 이동
  const navigate = useNavigate();

  //회원가입 form axios post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/accounts/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      });
      alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요.");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (e) {
      alert("이미 존재하는 아이디입니다.");
      //서버에서 받은 에러 메세지
      console.log(e.response.data);
    }
  };

  //input창 상태관리
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password1") {
      setPassword1(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
  };

  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
      <form onSubmit={handleSubmit} id={styles.signform}>
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
            name="password1"
            value={password1}
            onChange={handleChange}
          ></input>
        </p>
        <p className={styles.formelement}>
          <label htmlFor="password2">비밀번호를 다시 한번 입력해 주세요</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit" id={styles.signBT}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
