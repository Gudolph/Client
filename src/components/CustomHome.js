import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const CustomHome = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();

  const authCheck = () => {
    //페이지에 들어올 때 쿠키로 사용자 체크
    const token = cookies;
    console.log(token);
  };

  useEffect(() => {
    authCheck();
  });

  return <div>{userName && <h1>{userName}님 환영합니다.</h1>}</div>;
};

export default CustomHome;
