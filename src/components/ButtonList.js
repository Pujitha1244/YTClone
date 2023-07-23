import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Valentines",
  ];
  return (
    <div className="flex">
      {buttonList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
