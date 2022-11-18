import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword1(value);
    }
  };

  return (
    <div>
      <h1>로그인 화면</h1>
      <form>
        <p>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </p>
      </form>
    </div>
  );
};

export default Login;
