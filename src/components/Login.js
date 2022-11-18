import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/reducers/AuthReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
    <div>
      <h1>로그인 페이지</h1>
      <form onSubmit={submit}>
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
          <label htmlFor="password1">password: </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
