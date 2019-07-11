import React from 'react';
// import Menu from "./Menu";
import Panel from './Panel/Panel';
import Draw from './Draw/Draw';
import style from './Menu/Menu.module.css';
import styled from 'styled-components';
import flowers from '../flowers.json';

const Container = styled.div`
  width: 1300px;
`;

const App = () => {
  return (
    <Container>
      <div className={style.mainStyle}>
        <Panel title="Beautiful React in pictures">
          <Draw obj={flowers} />
        </Panel>

        {/* <Menu
        id="1"
        title="Flower"
        icon=
          "https://cdn.pixabay.com/photo/2018/11/19/05/43/away-3824651_960_720.jpg"
        price="121"
      /> */}
        {/* <p>Hello World</p> */}
      </div>
    </Container>
  );
};

export default App;
