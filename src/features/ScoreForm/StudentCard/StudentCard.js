import React from "react";
import style from "./Student.module.css";

const StudentCard = ({ name, scoreData = [] }) => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
      </div>
      <div className={style.name}>{name}</div>

      {scoreData.length > 0
        ? scoreData.map((item, index) => (
            <div className={style.score_container}></div>
          ))
        : null}
    </div>
  );
};

export default StudentCard;
