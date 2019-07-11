import React from 'react';
import Menu from '../Menu/index';
import style from '../Menu/Menu.module.css';
// import styled from 'styled-components';

// const StyleWrapper = styled.ul`
//  background-color:  linear-gradient(to right, rgba(252,236,252,1) 0%, rgba(251,166,225,1) 50%, rgba(253,137,215,1) 51%, rgba(255,124,216,1) 100%);
// `

const Draw = ({ obj }) => {
  console.log(obj);
  return (
    <ul className={style.listStyle}>
      {obj.map(elem => (
        <li key={elem.id}>
          <Menu {...elem} />
        </li>
      ))}
    </ul>
  );
};

export default Draw;
