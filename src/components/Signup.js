import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

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
    } catch (e) {
      //서버에서 받은 에러 메세지
      console.log(e.response.data.message);
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
    <div>
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="email">email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="password1">password1: </label>
          <input
            type="text"
            name="password1"
            value={password1}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="password2">password2: </label>
          <input
            type="text"
            name="password2"
            value={password2}
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
