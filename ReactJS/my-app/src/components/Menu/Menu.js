import React from "react";
import style from './Menu.module.css';
// import styled from 'styled-components';


// const StyleWrapper = styled.ul`
//   color: brown; 
//   font-size: 50px;
//   font-style: italic;

// `
 


// console.log(style);


const Menu = ({ title, icon, price, disabled}) => {
  return (
    <div>
      <img className={style.imgStyle} src={icon} alt="flowers and cakes" height = "320"/>
      <h1 className={style.titleStyle}>{title}</h1>
      <p className={style.priceStyle}>{price}</p>
    </div>
  );
};

export default Menu;
