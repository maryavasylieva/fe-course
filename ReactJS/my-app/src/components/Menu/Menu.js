import React from 'react';
import style from './Menu.module.css';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const StyleWrapper = styled.ul`
//   color: brown;
//   font-size: 50px;
//   font-style: italic;

// `

// console.log(style);

const Menu = ({ title, icon, text, alt }) => {
  return (
    <div>
      <img className={style.imgStyle} src={icon} alt={alt} height="320" />
      <h1 className={style.titleStyle}>{title}</h1>
      <p className={style.priceStyle}>{text}</p>
    </div>
  );
};

Menu.defaultProps = {
  alt: 'flowers and cakes',
};

Menu.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  // name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Menu;
