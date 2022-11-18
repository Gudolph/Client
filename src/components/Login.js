import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>로그인 화면</h1>
      <form>
        <input></input>
      </form>
    </div>
  );
};

export default Login;
