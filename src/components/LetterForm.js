import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//css
import styles from "../css/LetterForm.module.css";

const LetterForm = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookies"]);
  const navigate = useNavigate();
  const [userName, setUsername] = useState("test"); //토큰으로 유저 정보 갖고오기

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

  return (
    <div id={styles.home}>
      <h1 id={styles.usertitle}>
        {userName}의 2022 <br />
        Self Advent Calender
      </h1>
      <div id={styles.letterform}>
        <p className={styles.formelement}>
          <label htmlFor="nickname">보낸 사람 이름을 입력해주세요.</label>
          <input type="text" name="nickname"></input>
        </p>
        <p className={styles.formelement}>
          <label htmlFor="nickname">
            올해가 끝나기전, 전달하고 싶은
            <br />
            메세지 내용을 입력해 주세요.
          </label>
          <textarea type="text" name="nickname"></textarea>
        </p>
        <Link to="/calender">
        <button type="button" className={styles.LinkBT} >메세지 작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default LetterForm;
