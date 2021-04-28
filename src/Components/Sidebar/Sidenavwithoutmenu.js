import React from "react";
import "./Sidenav.css";
import Sidebarwithoutmenu from "./Sidebarwithoutmenu"

function Sidenavwithoutmenu({callback,name}) {
  return (
    <>
    <Sidebarwithoutmenu callback={callback} name={name}/>
    </>
  );
}

export default Sidenavwithoutmenu;
