import React from "react";
// import Menu from '../Menu/Menu';

const Panel = ({ title, children }) => (
  <div>
    {/* <Menu newProps={title} /> */}
    <h1>{title}</h1>
    {children}
  </div>
)

// Panel.defaultProps = {
  // isOpen: true
// }
export default Panel;
