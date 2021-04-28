import React from "react";
import Dashboardcomponent from "./Dashboardcomponent";
import Notificationcomponent from "./Notificationcomponet";
import WorkFromHomecomponent from "./WorkFromHome";

function Switch({ component }) {
  switch (component) {
    case "Dashboard":
      return<Dashboardcomponent />
    case "notification":
      return <Notificationcomponent />;
    case "work from home":
      return <WorkFromHomecomponent />;
    default:
      <Dashboardcomponent />;
  }
}

export default Switch;
