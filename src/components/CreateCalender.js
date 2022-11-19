import axios, { AxiosHeaders } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
//css
import styles from "../css/CreateCalender.module.css";
const CreateCalender = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["cookies"]); //쿠키e

  const handleCreate = async (e) => {
    //user의 calender 생성
    e.preventDefault();
    const token = cookies;
    console.log(token.cookies.access_token);
    try {
      await axios
        .post("http://127.0.0.1:8000/calenders/calender/", {
          headers: {
            Authorization: token.cookies.access_token,
          },
        })
        .then((res) => {
          console.log("캘린더 생성 성공");
        });
      setTimeout(() => {
        navigate("/userHome");
      }, 1000);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
      <div id={styles.goCreate}>
        <button type="button" id={styles.createBT} onClick={handleCreate}>
          캘린더 생성하기
        </button>
      </div>
    </div>
  );
};

export default CreateCalender;
