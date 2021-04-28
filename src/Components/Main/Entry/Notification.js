import Sidebargrid from "../../Sidebar/Sidebargrid";
import React, { useState } from "react";

function Notification() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebargrid Hide={() => setShow(!show)} show={show} name="notification" />
    </>
  );
}

export default Notification;
