import React from "react";

import style from "./ScoreForm.module.css";
import StudentCard from "./StudentCard/StudentCard";

const ScoreForm = () => {
  return (
    <div className={style.container}>
      <StudentCard name="Mahasiswa 1" />
    </div>
  );
};

export default ScoreForm;
