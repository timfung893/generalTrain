import React, { useState } from "react";
import "./ColorBox.css";

function getColor() {
  const colorList = ["black", "green", "yellow", "deeppink", "blue"];
  const randomColor = Math.trunc(Math.random(colorList) * 5);
  return colorList[randomColor];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const iniColor = localStorage.getItem("boxColor") || "deeppink";
    return iniColor;
  });

  function handleChangeColor() {
    const newColor = getColor();
    setColor(newColor);
    localStorage.setItem("boxColor", newColor);
  }

  return (
    <div
      className="color-box"
      onClick={handleChangeColor}
      style={{ backgroundColor: color }}
    >
      color box
    </div>
  );
}
export default ColorBox;
