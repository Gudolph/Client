import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Calender.module.css";

const Calender = () => {
  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
        <div id={styles.calender_grid}>
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
            <div class="item">8</div>
            <div class="item">9</div>
            <div class="item">10</div>
            <div class="item">11</div>
            <div class="item">12</div>
            <div class="item">13</div>
            <div class="item">14</div>
            <div class="item">15</div>
            <div class="item">16</div>
            <div class="item">17</div>
            <div class="item">18</div>
            <div class="item">19</div>
            <div class="item">20</div>
            <div class="item">21</div>
            <div class="item">22</div>
            <div class="item">23</div>
            <div class="item">24</div>

        </div>
    </div>
  );
};

export default Calender;
