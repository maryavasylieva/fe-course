import React from "react";

const Menu = ({ title, icon, price }) => {
  //   console.log(props);
  return (
    <div>
      <img src={icon} alt="flowers and cakes" />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Menu;
