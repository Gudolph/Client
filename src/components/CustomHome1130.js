import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
//css
import styles from "../css/Customhome.module.css";

const CustomHome1130 = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookies"]);
  const [userName, setUsername] = useState("test"); //토큰으로 유저 정보 갖고오기
  const [countLetter, setCountLetter] = useState(0); //토큰으로 유저가 받은 쪽지 갖고오기
  const [totalLetter, setTotalLetter] = useState(24); //총 받는 쪽지 수
  const navigate = useNavigate();

  const authCheck = () => {
    //페이지에 들어올 때 쿠키로 사용자 체크
    const token = cookies;
    //console.log("받은", token);
    //console.log("user", token.cookies.user.username);

    setUsername(token.cookies.user.username);
  };

  useEffect(() => {
    authCheck();
  });
  //{userName && <h1>{userName}님 환영합니다.</h1>}
  return (
    <div id={styles.home}>
      <h1 id={styles.usertitle}>
        {userName}의 2022 <br />
        Self Advent Calender
      </h1>
      <div id={styles.countcontent}>
        <span>{countLetter}</span>/<span>{totalLetter}</span>
      </div>
      {/* 배포시 링크 연결 */}
      <button type="button" id={styles.LinkBT}>
        링크공유해서 메세지 받기
      </button>
    </div>
  );
};

export default CustomHome1130;
