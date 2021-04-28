import Sidebargrid from "../../Sidebar/Sidebargrid";
import React, { useState } from "react";

function Wfhome() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebargrid Hide={() => setShow(!show)} show={show} name="work from home"/>
    </>
  );
}

export default Wfhome;
