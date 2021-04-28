import Sidebargrid from "../../Sidebar/Sidebargrid";
import React, { useState } from "react";

function Dashboard() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebargrid Hide={() => setShow(!show)} show={show} name="Dashboard"/>
    </>
  );
}

export default Dashboard;
