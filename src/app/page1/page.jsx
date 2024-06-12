"use client";

import React from "react";
import { TextField } from "@mui/material";
import styles from "../page.module.css";
import { useState } from "react";

export default function Home() {
  const init = 0;

  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <body style={{ backgroundColor: "#d6ccc2" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <p>aaa</p>
        <h1>bbb</h1>
        <TextField label="text" />
        <button onClick={handleClick}>カウント</button>
        <p>{count}回、クリックされました。</p>
      </div>
    </body>
  );
}
