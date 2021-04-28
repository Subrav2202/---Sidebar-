import React from "react";
import "./Sidenav.css";
import Sidebarwithmenu from "./Sidebarwithmenu"


function Sidenavwithmenu({callback,name}) {
  console.log(name)
  return (
    <>
      <Sidebarwithmenu callback={callback} name={name}/>
    </>
  );
}

export default Sidenavwithmenu;
