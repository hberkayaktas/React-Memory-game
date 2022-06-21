import React from "react";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function Card({ item }) {
  const [status, setstatus] = useState(false);
  const white = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png";
  const [resim, setresim] = useState(white);
  const turn = () => {
    if (!status) {
      setstatus(true);
      const resim_degis = () => {
        setresim(item.item_img);
      };
      setTimeout(resim_degis, 50);
    }else{
      setstatus(false);
      const resim_degis = () => {
        setresim(white);
      };
      setTimeout(resim_degis, 220);
    }
  };
  return (
    <div onClick={turn} className="card">
      <img
        className={`front ${status && "toBack"}`}
        src={resim}
        alt={item.item_name}
      />
    </div>
  );
}

export default Card;
