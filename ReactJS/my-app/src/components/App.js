import React from "react";
// import Menu from "./Menu";
import Panel from "./Panel/Panel";
import Draw from './Draw/Draw';

const flowers = [
   {
      id: 1,
      title: "Flower",
      icon : "https://cdn.pixabay.com/photo/2018/11/19/05/43/away-3824651_960_720.jpg",
      price: 121,

   },
   {
      id: 2,
      title: "Cakes",
      icon : "https://cdn.pixabay.com/photo/2018/05/02/15/49/eating-3368824_960_720.jpg",//cdn.pixabay.com/photo/2018/11/19/05/43/away-3824651_960_720.jpg",
      price: 21,

   },

   {
      id: 3,
      title: "sweety kitten",
      icon: "https://cdn.pixabay.com/photo/2019/06/18/11/32/cat-4282123_960_720.jpg",
      price: 200,
   },
]



const App = () => {
  return (
    <div>
      <Panel title="Beautiful React in pictures">
         <Draw obj = {flowers} />
      </Panel>
      {/* <Panel>
        <Menu
          title="Tasty cakes"
          isOpen={true}
          icon="https://cdn.pixabay.com/photo/2018/05/02/15/49/eating-3368824_960_720.jpg"
        />
      </Panel> */}

      {/* <p>Hello World</p> */}
    </div>
  );
};
export default App;
