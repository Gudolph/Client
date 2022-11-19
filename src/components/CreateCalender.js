import React from "react";
//css
import styles from "../css/CreateCalender.module.css";
const CreateCalender = () => {
  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
      <div id={styles.goCreate}>
        <button type="button" id={styles.createBT}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default CreateCalender;
