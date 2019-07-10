import React from "react";
import Menu from "../Menu/index";

const Draw = ({ obj }) => {
  console.log(obj);
  return (
    <div>
      {obj.map((elem) => (
        <li key={elem.id}>
          <Menu {...elem} />
        </li>
      ))}
    </div>
  );
};

export default Draw;
